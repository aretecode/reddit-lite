import * as React from 'react'
import { render } from 'react-testing-library'
import { InfiniteScroll } from '../'
import * as exported from '../'

/**
 * we have it polyfill in jest.setup
 */
describe('InfiniteScroll', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const { container } = render(
      <InfiniteScroll
        onReadyToLoadMore={() => {
          throw new Error('never scrolls')
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it.skip('should load more when we scroll', () => {
    // @todo
  })
})
