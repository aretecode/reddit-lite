import * as React from 'react'
import styled, { css } from 'styled-components'
import { StyledMaterialIcon } from '../MaterialIcon'

export const StyledScoreNumber = styled.span`
  color: #1b1b1b;
  margin: 0 auto;
`

export interface ScoreProps {
  children: number
}

export const disallowedStyles = css`
  cursor: not-allowed;
  &:active {
    pointer-events: none;
  }
`

export const StyledIcon = styled(StyledMaterialIcon)`
  align-self: center;
  ${disallowedStyles};
`

/**
 * @todo more semantic...
 */
export const StyledScoreWrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-right: 1rem;
  align-self: center;
`

export function Score(props: ScoreProps) {
  return (
    <StyledScoreWrap>
      <StyledIcon icon="up_arrow" />
      <StyledScoreNumber>{props.children}</StyledScoreNumber>
      <StyledIcon icon="down_arrow" />
    </StyledScoreWrap>
  )
}
