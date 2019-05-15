import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Logo, StyledRedditAvatarLogo, StyledRedditTextLogo } from './index'

storiesOf('Logo', module)
  .add('default', () => <Logo />)
  .add('avatar', () => <StyledRedditAvatarLogo />)
  .add('text', () => <StyledRedditTextLogo />)
