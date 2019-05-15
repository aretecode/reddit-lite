import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

export const StyledScoreNumber = styled.span`
  color: #1b1b1b;
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

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: 14px;
  max-height: 16px;
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
`

export function Score(props: ScoreProps) {
  return (
    <StyledScoreWrap>
      <StyledFontAwesomeIcon icon={faArrowUp} />
      <StyledScoreNumber>{props.children}</StyledScoreNumber>
      <StyledFontAwesomeIcon icon={faArrowDown} />
    </StyledScoreWrap>
  )
}
