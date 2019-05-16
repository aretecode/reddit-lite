import * as React from 'react'
import { Logo } from '../Logo'
import { StyledHeader } from './styled'

export default class Header extends React.PureComponent<
  React.ComponentProps<typeof StyledHeader>
> {
  render() {
    return (
      <StyledHeader {...this.props}>
        <Logo />
      </StyledHeader>
    )
  }
}
