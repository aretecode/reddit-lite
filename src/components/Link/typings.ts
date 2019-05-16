import * as React from 'react'

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to?: string
  href?: string
  rel?: string
  className?: string
}
