import * as React from 'react'
import { EMPTY_ARRAY } from '../../utils/EMPTY'
import { RedditLitePostItemType } from '../../typings'
import { Post } from '../Post'
import { LeaderBoard } from '../LeaderBoard'
import { StyledMain, StyledPostList } from './styled'

export function PostList(props: {
  subReddit: string
  list: RedditLitePostItemType[]
}) {
  const { subReddit, list = EMPTY_ARRAY } = props
  return (
    <>
      <LeaderBoard>
        <h1>r/{subReddit}</h1>
      </LeaderBoard>
      <StyledMain />
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
}
