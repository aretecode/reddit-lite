import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { format, distanceInWords } from 'date-fns'
import { DateTime } from './index'

const isoDate = format(Date.now(), 'YYYY-MM-DD[T]HH:mm:ssZZ')
const createdAtPretty = distanceInWords(Date.now() - 10000, Date.now())

const DateTimeAny = DateTime as any
storiesOf('DateTime', module)
  .add('default', () => <DateTimeAny />)
  .add('with date', () => (
    <DateTime dateTime={isoDate}>{createdAtPretty}</DateTime>
  ))
