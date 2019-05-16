import * as React from 'react'
import { IconNameType } from './typings'

export const iconInvisibleSquarePathView = (
  <path fill="none" d="M0 0h24v24H0V0z" key="background" />
)

export function fromIconNameToPath(name: IconNameType) {
  if (name === 'up_arrow') {
    return 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z'
  } else if (name === 'down_arrow') {
    return 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
  } else if (name === 'comment') {
    return 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'
  } else {
    if (process.env.NODE_ENV === 'development') {
      throw new Error('must pass icon name into icon component')
    }
    return ''
  }
}
