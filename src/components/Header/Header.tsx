import * as React from 'react'
import { Logo } from '../Logo'
import { StyledHeader } from './styled'

export default class Header extends React.PureComponent {
  render() {
    return (
      <StyledHeader>
        <Logo />
      </StyledHeader>
    )
  }
}
