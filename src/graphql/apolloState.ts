/**
 * @fileOverview this file is for the client side graphql
 *               it can be used with the `@client` directive
 * @see https://www.apollographql.com/docs/react/essentials/local-state
 */
import { gql } from 'apollo-boost'
import { Resolvers } from '../typings'
import RedditQuery from './Reddit.graphql'

export const typeDefs = gql`
  type RedditPost {
    title: String
  }
  type Query {
    posts(total: Int): [RedditPost]
  }
`

// tslint:disable typedef
export const defaultApolloState = {
  __typename: 'RedditPost',
  posts: [],
}

export const apolloState = {
  defaults: {
    reddit: defaultApolloState,
  },
  resolvers: {
    Query: {
      async posts(obj, args, context, info) {
        console.info('[query] Reddit')

        const data = context.cache.read({
          query: RedditQuery,
          optimistic: true,
        })

        return { ...data!.reddit }
      },
    },
  } as Resolvers,
}
