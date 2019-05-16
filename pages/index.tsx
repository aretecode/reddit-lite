/**
 * @file @todo finish cleaning this up
 */
import * as React from 'react'
import { QueryResult } from 'react-apollo'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { AppContext, AppContextValueType } from '../src/AppContext'
import { EMPTY_OBJ, EMPTY_ARRAY } from '../src/utils/EMPTY'
import { update } from '../src/redux'
import { StyledLoadMoreButton, PostList } from '../src/components/PostList'
import { ReduxStateType, RedditLitePostsGraphQLResponse } from '../src/typings'
import { init as EMPTY_RESPONSE_INNER } from '../src/redux'
import RedditPostsQuery from '../src/graphql/Reddit.graphql'
import {
  fromNewDataToApollo,
  fromFetchMoreToSafeUpdate,
} from '../src/graphql/transform'

export const EMPTY_RESPONSE = Object.freeze({
  data: {
    posts: EMPTY_RESPONSE_INNER,
  },
})

export type IndexPageProps = ReduxStateType & {
  setPostsData: (payload: ReduxStateType) => void
}

export class IndexPage extends React.PureComponent<IndexPageProps> {
  /**
   * useContext(AppContext) with hooks, in fn components
   */
  static contextType = AppContext
  static defaultProps = EMPTY_RESPONSE_INNER
  graphql: QueryResult<
    RedditLitePostsGraphQLResponse,
    any
  > = EMPTY_RESPONSE as any

  handleLoadMore = () => {
    console.debug('ready')

    const { fetchMore } = this.graphql
    const { before, after, limit } = this.props.params
    const context = this.context as AppContextValueType
    const subReddit = context.url.searchParams.get('subReddit') || 'vancouver'

    fetchMore({
      /**
       * @note this is a different query than the one used in the Query component
       */
      query: RedditPostsQuery,
      variables: {
        subReddit,
        limit,
        before,
        after,
      },

      /**
       * @todo move to side effect free file
       */
      updateQuery: (previousResult, options) => {
        const { fetchMoreResult } = options
        const { setPostsData, list } = this.props

        const fetched = fromFetchMoreToSafeUpdate({
          previousResult,
          fetchMoreResult,
        })
        const { newList, newBefore, newAfter } = fetched
        const mergedList = [...list, ...newList]
        const newParams = {
          subReddit,
          before: newBefore,
          after: newAfter,
          limit,
        }
        const newData: Partial<ReduxStateType> = {
          params: newParams,
          list: mergedList,
        }
        /**
         * @note there is a slight mismatch between redux & apollo
         *       we are nesting in redux so we could select if needed
         *       but in apollo, we keep it flat
         */
        const apolloData = fromNewDataToApollo({
          ...newParams,
          list: mergedList,
        })

        setPostsData(newData as Required<ReduxStateType>)
        this.graphql.data = apolloData

        return apolloData
      },
    })
  }

  /**
   * for better perf, we'd separate the functions to their own fns
   * but this is aimed to be minimal...
   */
  render() {
    /**
     * @note this could be a redux selector, if we managed it via redux
     */
    const context = this.context as AppContextValueType
    const subReddit = context.url.searchParams.get('subReddit') || 'vancouver'
    const { limit } = this.props.params

    return (
      <>
        <Query<RedditLitePostsGraphQLResponse>
          variables={{ limit, subReddit }}
          query={RedditPostsQuery}
          // this will update 1x a minute
          pollInterval={60000}
          onCompleted={completed => {
            /**
             * could update redux from here
             */
            console.debug('completed')
          }}
        >
          {response => {
            this.graphql = response
            const {
              data = EMPTY_OBJ as RedditLitePostsGraphQLResponse,
            } = response
            const posts = data.posts || EMPTY_OBJ

            return <PostList list={posts.list} subReddit={subReddit} />
          }}
        </Query>
        <StyledLoadMoreButton onClick={this.handleLoadMore}>
          load more
        </StyledLoadMoreButton>
      </>
    )
  }
}

/**
 * normally I'd separate the functions, but they are tedious to type
 */
export default connect(
  (state: ReduxStateType = EMPTY_OBJ as any) => ({
    params: state.params,
    list: state.list,
  }),
  (dispatch, payload) => ({
    dispatch,
    setPostsData: (args: any) => {
      console.debug('setPostsData')
      return dispatch(update(args))
    },
  })
  // redux has typing issues with my frozen defaultProps
)(IndexPage as any)
