import * as React from 'react'
import { render } from 'react-testing-library'
import { LeaderBoard } from '../'
import * as exported from '../'

describe('LeaderBoard', () => {
  it('should match export snapshot', () => {
    expect(exported).toMatchSnapshot()
  })
  it('should render without errors', () => {
    const { container } = render(<LeaderBoard />)
    expect(container).toMatchSnapshot()
  })
})
