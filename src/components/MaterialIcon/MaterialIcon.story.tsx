import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { MaterialIcon } from './index'

storiesOf('MaterialIcon', module).add('all', () => (
  <>
    <MaterialIcon icon="up_arrow" />
    <MaterialIcon icon="down_arrow" />
    <MaterialIcon icon="comment" />
  </>
))
