import { isObjPure, isArray } from '../utils/is'
import { EMPTY_OBJ, EMPTY_ARRAY } from '../utils/EMPTY'
import {
  UnsafeFetchMoreResponse,
  RedditLitePostsGraphQLResponse,
  RedditLitePostsResponse,
} from '../typings'

/**
 * @todo should not have to be done on client side
 */
export function fromFetchMoreToSafeUpdate(args: UnsafeFetchMoreResponse) {
  const { fetchMoreResult } = args

  const newPosts =
    isObjPure(fetchMoreResult) && isObjPure(fetchMoreResult.posts)
      ? fetchMoreResult.posts
      : EMPTY_OBJ

  const newList = isArray(newPosts.list) ? newPosts.list : EMPTY_ARRAY

  const newBefore = newPosts.before
  const newAfter = newPosts.after

  return {
    newPosts,
    newList,
    newBefore,
    newAfter,
  }
}

export function fromNewDataToApollo(newData: RedditLitePostsResponse) {
  return {
    posts: {
      ...newData,
      __typename: 'RedditLiteResponse',
    },
    __typename: '',
  } as RedditLitePostsGraphQLResponse
}
