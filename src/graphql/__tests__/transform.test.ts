import { fromResponseToPostList } from '../transform'

const response = {
  kind: 'Listing',
  data: {
    modhash: '',
    dist: 26,
    children: [
      {
        kind: 't3',
        data: {
          approved_at_utc: null,
          subreddit: 'vancouver',
          selftext:
            'Are you looking for something to do? Would you like to advertise your event? Want to suggest something to everyone? Whether it\'s a show, a play, a conference, a restaurant opening, or whatever, this is where you can stick all of it. This is a monthly post that is useful for Vancouverites, useful for tourists, and useful for the main Vancouver sub.\n\n**New**\n\nPlease post any opportunities to volunteer that you want the subreddit to know about. This thread will be curated periodically to keep the events of the week fresh and visible.\n\n**Who?**\n\nEvents don\'t need to be yours! You\'re welcome to post any interesting/fun/unknown/well known/moderately-enjoyable events. Will remove posts completely off topic (like a link to one\'s unrelated blog or comments about how there\'s nothing to do in this city)\n\n**Tip**\n\nSort the comments below BY NEW to see the latest events\n\n\n[April Events Thread](https://www.reddit.com/r/vancouver/comments/b5dlhh/april_events_and_volunteering_thread_please_post/)',
          author_fullname: 't2_3rnmf',
          saved: false,
          mod_reason_title: null,
          gilded: 0,
          clicked: false,
          title:
            'May Events and Volunteering Thread. Please post your upcoming events and volunteering opportunities here.',
          link_flair_richtext: [],
          subreddit_name_prefixed: 'r/vancouver',
          hidden: false,
          pwls: 6,
          link_flair_css_class: 'grey',
          downs: 0,
          thumbnail_height: null,
          hide_score: false,
          name: 't3_bjcurx',
          quarantine: false,
          link_flair_text_color: 'dark',
          author_flair_background_color: '',
          subreddit_type: 'public',
          ups: 23,
          total_awards_received: 0,
          media_embed: {},
          thumbnail_width: null,
          author_flair_template_id: null,
          is_original_content: false,
          user_reports: [],
          secure_media: null,
          is_reddit_media_domain: false,
          is_meta: false,
          category: null,
          secure_media_embed: {},
          link_flair_text: 'Ask Vancouver',
          can_mod_post: false,
          score: 23,
          approved_by: null,
          thumbnail: 'self',
          edited: false,
          author_flair_css_class: '',
          author_flair_richtext: [],
          gildings: {},
          content_categories: null,
          is_self: true,
          mod_note: null,
          created: 1556711732.0,
          link_flair_type: 'text',
          wls: 6,
          banned_by: null,
          author_flair_type: 'text',
          domain: 'self.vancouver',
          selftext_html:
            '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Are you looking for something to do? Would you like to advertise your event? Want to suggest something to everyone? Whether it&amp;#39;s a show, a play, a conference, a restaurant opening, or whatever, this is where you can stick all of it. This is a monthly post that is useful for Vancouverites, useful for tourists, and useful for the main Vancouver sub.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;New&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Please post any opportunities to volunteer that you want the subreddit to know about. This thread will be curated periodically to keep the events of the week fresh and visible.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Who?&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Events don&amp;#39;t need to be yours! You&amp;#39;re welcome to post any interesting/fun/unknown/well known/moderately-enjoyable events. Will remove posts completely off topic (like a link to one&amp;#39;s unrelated blog or comments about how there&amp;#39;s nothing to do in this city)&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;Tip&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;Sort the comments below BY NEW to see the latest events&lt;/p&gt;\n\n&lt;p&gt;&lt;a href="https://www.reddit.com/r/vancouver/comments/b5dlhh/april_events_and_volunteering_thread_please_post/"&gt;April Events Thread&lt;/a&gt;&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
          likes: null,
          suggested_sort: null,
          banned_at_utc: null,
          view_count: null,
          archived: false,
          no_follow: false,
          is_crosspostable: false,
          pinned: false,
          over_18: false,
          all_awardings: [],
          media_only: false,
          can_gild: false,
          spoiler: false,
          locked: false,
          author_flair_text: 'google searches for you',
          visited: false,
          num_reports: null,
          distinguished: 'moderator',
          subreddit_id: 't5_2qhov',
          mod_reason_by: null,
          removal_reason: null,
          link_flair_background_color: '',
          id: 'bjcurx',
          is_robot_indexable: true,
          report_reasons: null,
          author: 'soupyhands',
          num_crossposts: 0,
          num_comments: 50,
          send_replies: true,
          whitelist_status: 'all_ads',
          contest_mode: false,
          mod_reports: [],
          author_patreon_flair: false,
          author_flair_text_color: 'dark',
          permalink: '/r/vancouver/comments/bjcurx/may_events_and_volunteering_thread_please_post/',
          parent_whitelist_status: 'all_ads',
          stickied: true,
          url:
            'https://www.reddit.com/r/vancouver/comments/bjcurx/may_events_and_volunteering_thread_please_post/',
          // "url": "https://i.redd.it/zirh0vl4x6y21.jpg",
          subreddit_subscribers: 126462,
          created_utc: 1556682932.0,
          media: null,
          is_video: false,
        },
      },
    ],
  },
}

describe('graphql', () => {
  describe('transform', () => {
    it('should safely trannsform our response', () => {
      const transformed = fromResponseToPostList(response)
      const [first] = transformed
      expect(first.id).toEqual('bjcurx')
      expect(typeof first.postKind).toEqual('string')
      expect(typeof first.title).toEqual('string')
      expect(typeof first.body).toEqual('string')
      expect(typeof first.url).toEqual('string')
      expect(typeof first.authorFullName).toEqual('string')
      expect(typeof first.authorFlairText).toEqual('string')
      expect(typeof first.score).toEqual('number')
      expect(typeof first.commentCount).toEqual('number')
      expect(typeof first.isSticky).toEqual('boolean')
      expect(transformed).toMatchSnapshot()
    })
  })
})
