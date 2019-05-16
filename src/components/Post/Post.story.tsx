import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Post } from './index'

const stories = storiesOf('Post', module)
stories.addDecorator(withKnobs)

stories.add('as dynamic variables', () => {
  const title = text('Title', 'Eh')
  const authorFullName = text('Author', 'aretecode')
  const body = text('Body', 'This is invisible currently')
  const createdAt = text('Created at', '15 minutes')
  const score = number('Score', 9001)
  const commentCount = number('CommentCount', 9002)
  const imageUrl = text('Image', 'https://via.placeholder.com/150')
  const url = text('URL', 'https://www.reddit.com/r/vancouver/')
  const item = {
    title,
    imageUrl,
    url,
    body,
    authorFullName,
    score,
    commentCount,
    createdAtPretty: createdAt,
    createdAtUtc: undefined as any,
    createdAtIso: undefined as any,
    postKind: 'text' as any,
    isSticky: false,
    id: '-42',
    authorFlairText: 'minimal',
  }

  return <Post item={item} />
})
