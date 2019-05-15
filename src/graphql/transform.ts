import { RedditBasicResponseType, RedditLitePostItemType, RedditLitePostKindType } from '../typings'

export function fromResponseToPostList(response: RedditBasicResponseType) {
  return response.data.children.map(
    (child): RedditLitePostItemType => {
      const {data} = child

      return {
        id: data.id,
        postKind: (data.post_hint || 'text') as RedditLitePostKindType,
        title: data.title || '',
        body: data.selftext || '',
        url: 'https://reddit.com' + data.permalink,
        isSticky: !!data.stickied,

        // .downs, .ups
        score: data.score || 0,

        // could nest
        authorFullName: data.author_fullname || '',
        authorFlairText: data.author_flair_text || '',
        commentCount: data.num_comments || 0,
      }
    }
  )
}
