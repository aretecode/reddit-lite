import * as React from 'react'
import {
  IntersectionObserverStateType,
  IntersectionObserverProps,
} from './typings'
import { StyledInfiniteScrollWrap } from './styled'

export const HAS_SUPPORT_FOR_INTERSECTION_OBSERVER =
  typeof IntersectionObserver === 'function'

export class InfiniteScroll extends React.PureComponent<
  IntersectionObserverProps,
  IntersectionObserverStateType
> {
  static defaultProps = {}
  /**
   * @note used any here for usage on any element, then in target, cast to type
   */
  wrapperRef: React.RefObject<any> =
    this.props.ref || this.props.forwardedRef || React.createRef<any>()
  observer: IntersectionObserver | undefined
  state = {
    hasIntersected:
      HAS_SUPPORT_FOR_INTERSECTION_OBSERVER === false && process.browser,
    isIntersecting: false,
    visiblePercent: 0,
  }

  constructor(
    props: IntersectionObserverProps,
    state: IntersectionObserverStateType
  ) {
    super(props, state)
    this.fetchData()
  }

  get target() {
    return this.wrapperRef.current === null
      ? undefined
      : (this.wrapperRef.current as HTMLElement)
  }

  observe() {
    const handleObservingChange = (changes: IntersectionObserverEntry[]) => {
      for (const change of changes) {
        /**
         * Ratio of intersectionRect area to boundingClientRect area
         * Converted to /100
         *
         * @todo change to how far to the end (only trigger at end, not total visibility)...
         */
        const visiblePercent = Math.floor(change.intersectionRatio * 100)

        if (process.env.NODE_ENV === 'development') {
          console.log({
            isIntersecting: change.isIntersecting,
            visiblePercent: `${visiblePercent}%`,
          })
        }

        if (
          change.isIntersecting === true &&
          this.state.isIntersecting === false
        ) {
          this.setState({
            isIntersecting: true,
            hasIntersected: true,
            visiblePercent,
          })
        } else {
          this.setState({ visiblePercent })
          this.props.onReadyToLoadMore()
        }
      }
    }

    const observerOptions = {
      root: undefined,
      rootMargin: '0px',

      /**
       * @note each 10% movement will trigger
       * @example
       *  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
       */
      /**
       * now, we only trigger 1x
       */
      threshold: [0.5],
    }

    if (this.target === undefined) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[ObservablePicture] missing target')
      }
    } else if (HAS_SUPPORT_FOR_INTERSECTION_OBSERVER === true) {
      this.observer = new IntersectionObserver(
        handleObservingChange,
        observerOptions
      )

      this.observer.observe(this.target as HTMLElement)
    }
  }

  unobserve() {
    if (this.target !== undefined && this.observer !== undefined) {
      // Stop watching for intersection events on this specific target Element
      this.observer.unobserve(this.target)
      // Stop observing threshold events on all target elements
      this.observer.disconnect()
    }
  }

  async fetchData() {
    // fetch
  }

  componentDidMount() {
    this.observe()
  }
  componentWillUnmount() {
    this.unobserve()
  }

  render() {
    const { onReadyToLoadMore, ...remainingProps } = this.props

    return (
      <StyledInfiniteScrollWrap
        {...remainingProps as any}
        forwardedRef={this.wrapperRef}
        ref={this.wrapperRef}
        state={this.state}
      >
        {this.props.children}
      </StyledInfiniteScrollWrap>
    )
  }
}
