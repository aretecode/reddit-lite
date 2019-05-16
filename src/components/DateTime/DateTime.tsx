/**
 * don't really need this, though we could format the data here if we didn't already elsewhere
 * right now it's basically passthrough
 */
import * as React from 'react'
import { StyledTime } from './styled'
import { DateTimeProps } from './typings'

export class DateTime extends React.PureComponent<DateTimeProps> {
  render() {
    const { dateTime, children, ...remainingProps } = this.props
    return (
      <StyledTime dateTime={dateTime} {...remainingProps}>
        {children}
      </StyledTime>
    )
  }
}
