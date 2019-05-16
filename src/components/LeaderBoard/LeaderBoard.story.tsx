import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { LeaderBoard } from './index'

storiesOf('LeaderBoard', module)
  .add('default', () => <LeaderBoard />)
  .add('with children', () => (
    <LeaderBoard>
      <h1>r/eh</h1>
    </LeaderBoard>
  ))
