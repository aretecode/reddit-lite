import * as React from 'react'
import { render } from 'react-testing-library'
import { Logo } from '../'
import * as exported from '../'

describe('Logo', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchSnapshot()
  })
})
