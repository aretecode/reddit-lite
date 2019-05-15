import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { StyledLink } from './index'

storiesOf('Link', module)
  .add('default', () => <StyledLink />)
  .add('with path/to', () => <StyledLink to="https://google.ca" />)
  .add('with path/to & children', () => <StyledLink to="https://google.ca">eh</StyledLink>)
