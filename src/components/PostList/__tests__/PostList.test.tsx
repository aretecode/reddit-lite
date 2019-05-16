import * as React from 'react'
import { render } from 'react-testing-library'
import { PostList } from '../'
import * as exported from '../'

describe('PostList', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const { container } = render(<PostList />)
    expect(container).toMatchSnapshot()
  })
})
