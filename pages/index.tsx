import * as React from 'react'
import styled from 'styled-components'
import { Post } from '../src/components/Post'
import { fixtureResponse } from '../src/static/fixture'
import { fromResponseToPostList } from '../src/graphql/transform'

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

export const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
`

export default () => {
  const posts = fromResponseToPostList(fixtureResponse as any)

  return (
    <>
      <StyledMain>
        <StyledPostList>
          {posts.map(post => {
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
