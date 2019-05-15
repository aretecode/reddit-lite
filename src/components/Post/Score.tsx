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

export function Score(props: ScoreProps) {
  return (
    <>
      <FontAwesomeIcon icon={faArrowUp} />
      <StyledScoreNumber>{props.children}</StyledScoreNumber>
      <FontAwesomeIcon icon={faArrowDown} />
    </>
  )
}
