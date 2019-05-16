import * as React from 'react'
import { render } from 'react-testing-library'
import { DateTime } from '../'
import * as exported from '../'

describe('DateTime', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const { container } = render(<DateTime />)
    expect(container).toMatchSnapshot()
  })
})
