import { gql } from 'apollo-boost'

export default gql`
  query RedditPosts(
    $subReddit: String
    $before: String
    $after: String
    $limit: Int = 1
  ) {
    posts(
      subReddit: $subReddit
      before: $before
      after: $after
      limit: $limit
    ) {
      before
      after
      list {
        id
        postKind
        createdAtIso
        createdAtUtc
        createdAtPretty
        title
        body
        url
        isSticky
        authorFullName
        authorFlairText
        commentCount
        score
        imageUrl
      }
    }
  }
`
