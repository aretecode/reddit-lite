import * as React from 'react'
/**
 * @see https://raw.githubusercontent.com/zeit/next.js/canary/packages/next/client/link.js
 * ^ does not accept className
 * @see https://github.com/zeit/next.js/issues/1942#issuecomment-313925454
 */
import BaseLink from 'next/link'
import styled from 'styled-components'
import { LinkProps } from './typings'

export const StyledHref = styled.a``

export class DynamicLink extends React.PureComponent<
  LinkProps & { theme?: any }
> {
  render() {
    const { to, href, theme, ...remainingProps } = this.props
    const toHref = (to || href || '') as string

    if (toHref.includes('http')) {
      return <a {...remainingProps} href={toHref} />
    } else {
      const { children, ...remaining } = remainingProps
      return (
        <BaseLink href={toHref}>
          <StyledHref {...remaining} href={toHref}>
            {children}
          </StyledHref>
        </BaseLink>
      )
    }
  }
}

export const StyledLink = styled(DynamicLink)`
  &:focus {
    outline: thin dotted;
  }
  &:hover {
    color: #aaa;
  }
  &:link {
    -webkit-tap-highlight-color: rgba(102, 102, 102, 0.5);
  }
`
