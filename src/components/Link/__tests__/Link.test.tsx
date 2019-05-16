import * as React from 'react'
import { render } from 'react-testing-library'
import { StyledLink } from '../Link'

describe('Link', () => {
  it('should render an <a> tag when using an absolute url', () => {
    const { container } = render(<StyledLink to="https://google.ca" />)
    expect(container.innerHTML).toContain('<a')
  })
})
