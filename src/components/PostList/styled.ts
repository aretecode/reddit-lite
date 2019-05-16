import styled from 'styled-components'

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

export const StyledLoadMoreButton = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: 2px solid var(--color-orange);
  color: var(--color-orange);
  margin-left: 1rem;
  margin-bottom: 1rem;
`

export const StyledMain = styled.main`
  display: flex;
`
