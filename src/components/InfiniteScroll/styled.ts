import styled from 'styled-components'
import { StyledWrapProps } from './typings'

/**
 * we can get rid of this using render props or the like
 *
 * @example can use this to see the scrolling area
 *    transition: border 0.24s cubic-bezier(0.4, 0, 0.2, 1);
 *    border: ${(props: StyledWrapProps) => props.state.visiblePercent}px solid pink;
 */
export const StyledInfiniteScrollWrap = styled.div`
  margin-bottom: 10vh;
  padding-bottom: 1rem;
`
