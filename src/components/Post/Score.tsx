import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export const StyledScoreNumber = styled.span`
  color: #1b1b1b;
`

export interface ScoreProps {
  children: number
}

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: 14px;
  max-height: 16px;
  align-self: center;
`

export function Score(props: ScoreProps) {
  return (
    <>
      <StyledFontAwesomeIcon icon={faArrowUp} />
      <StyledScoreNumber>{props.children}</StyledScoreNumber>
      <StyledFontAwesomeIcon icon={faArrowDown} />
    </>
  )
}
