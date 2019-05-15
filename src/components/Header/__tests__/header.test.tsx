import * as React from 'react'
import { render } from 'react-testing-library'
import { Header } from '../'
import * as exported from '../'

describe('Header', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const {container} = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
