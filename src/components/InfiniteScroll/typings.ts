import * as React from 'react'

export interface IntersectionObserverStateType {
  hasIntersected: boolean
  isIntersecting: boolean
  visiblePercent: number
}

export interface IntersectionObserverProps {
  forwardedRef?: React.RefObject<any>
  ref?: React.RefObject<any>
  onReadyToLoadMore: () => void
}

export interface StyledWrapProps {
  state: {
    visiblePercent: number
  }
}
