/**
 * @file @todo finish cleaning this up
 */
import * as React from 'react'
import styled from 'styled-components'
import { QueryResult } from 'react-apollo'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { EMPTY_OBJ, EMPTY_ARRAY } from '../src/utils/EMPTY'
import { update } from '../src/redux'
import { Post } from '../src/components/Post'
import { InfiniteScroll } from '../src/components/InfiniteScroll'
import { ReduxStateType, RedditLitePostsGraphQLResponse } from '../src/typings'
import RedditPostsQuery from '../src/graphql/Reddit.graphql'
import {
  fromNewDataToApollo,
  fromFetchMoreToSafeUpdate,
} from '../src/graphql/transform'

export const StyledPostList = styled.ul`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-gap: 0.5rem;
  height: max-content;

  li {
    list-style: none;
    display: flex;
    width: 100%;
  }
`

export const StyledLoadMoreButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: 2px solid var(--color-orange);
  color: var(--color-orange);
`

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
`

export const EMPTY_RESPONSE = Object.freeze({
  data: {
    posts: {
      list: EMPTY_ARRAY,
    },
  },
})

export type IndexPageProps = ReduxStateType & {
  setPostsData: (payload: ReduxStateType) => void
}

export class IndexPage extends React.PureComponent<IndexPageProps> {
  graphql: QueryResult<
    RedditLitePostsGraphQLResponse,
    any
  > = EMPTY_RESPONSE as any

  handleLoadMore = () => {
    console.warn('ready')
    const { fetchMore } = this.graphql
    const { before, after } = this.props.params
    const subReddit = 'vancouver'
    const limit = 20

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
        const fetched = fromFetchMoreToSafeUpdate({
          previousResult,
          fetchMoreResult,
        })
        const { newList, newBefore, newAfter } = fetched
        const mergedList = [...this.props.list, ...newList]
        const newParams = {
          subReddit,
          before: newBefore,
          after: newAfter,
          limit,
        }
        const newData: ReduxStateType = {
          params: newParams,
          list: mergedList,
        }
        /**
         * note there is a slight mismatch between redux & apollo
         * we are nesting in redux so we could select if needed
         * but in apollo, we keep it flat
         */
        const apolloData = fromNewDataToApollo({
          ...newParams,
          list: mergedList,
        })

        this.props.setPostsData(newData)
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
    return (
      <InfiniteScroll onReadyToLoadMore={this.handleLoadMore}>
        <Query<RedditLitePostsGraphQLResponse>
          variables={{ limit: 1 }}
          query={RedditPostsQuery}
          onCompleted={completed => {
            console.log({ completed })
          }}
        >
          {response => {
            this.graphql = response
            const {
              data = EMPTY_OBJ as RedditLitePostsGraphQLResponse,
            } = response
            const { list = EMPTY_ARRAY } = data.posts

            return (
              <>
                <StyledMain>
                  <StyledPostList>
                    {list.map(post => {
                      return (
                        <li key={post.id}>
                          <Post item={post} />
                        </li>
                      )
                    })}
                  </StyledPostList>
                </StyledMain>
              </>
            )
          }}
        </Query>
        <StyledLoadMoreButton onClick={this.handleLoadMore}>
          load more
        </StyledLoadMoreButton>
      </InfiniteScroll>
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
)(IndexPage)
