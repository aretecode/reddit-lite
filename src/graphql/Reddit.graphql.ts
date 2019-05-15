import { gql } from 'apollo-boost'

export default gql`
  query RedditPost {
    posts {
      title
    }
  }
`
