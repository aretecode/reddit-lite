import * as React from 'react'
import styled from 'styled-components'
import { Post } from '../src/components/Post'

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

export default () => (
  <>
    <StyledMain>
      <StyledPostList>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </StyledPostList>
    </StyledMain>
  </>
)
