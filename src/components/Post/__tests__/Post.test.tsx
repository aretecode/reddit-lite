import * as React from 'react'
import { render } from 'react-testing-library'
import { Post, Score } from '../'
import * as exported from '../'

describe('Post', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const {container} = render(<Post />)
    expect(container).toMatchSnapshot()
  })
  it('should render a Score', () => {
    const {container} = render(<Score>10</Score>)
    expect(container).toMatchSnapshot()
  })
})
