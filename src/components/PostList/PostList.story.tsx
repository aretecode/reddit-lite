import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { StyledLoadMoreButton, PostList } from './index'

storiesOf('PostList', module).add('default', () => (
  <>
    <PostList
      subReddit="vancouver"
      list={
        [
          {
            id: 'bjcurx',
            postKind: 'text',
            createdAtIso: '2019-04-30T20:55:32-0700',
            createdAtUtc: '1556682932',
            createdAtPretty: '15 days',
            title:
              'May Events and Volunteering Thread. Please post your upcoming events and volunteering opportunities here.',
            url:
              'https://reddit.com/r/vancouver/comments/bjcurx/may_events_and_volunteering_thread_please_post/',
            authorFullName: 't2_3rnmf',
            authorFlairText: 'google searches for you',
            commentCount: 53,
            score: 26,
          },
          {
            id: 'bp004f',
            createdAtIso: '2019-05-15T09:22:45-0700',
            createdAtUtc: '1557937365',
            createdAtPretty: 'about 8 hours',
            title:
              '\'Wasteful, inhumane\': Vancouver backs bill that would ban shark fin imports',
            url:
              'https://reddit.com/r/vancouver/comments/bp004f/wasteful_inhumane_vancouver_backs_bill_that_would/',
            authorFullName: 't2_o036b',
            commentCount: 182,
            score: 808,
            imageUrl:
              'https://b.thumbs.redditmedia.com/jK8Yxr8me6jKEt-3Ten7DphFwocuIO9sTSXx3E3Gc2k.jpg',
          },
        ] as any
      }
    />
    <StyledLoadMoreButton>load more</StyledLoadMoreButton>
  </>
))
