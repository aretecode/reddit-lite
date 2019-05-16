import * as React from 'react'

export interface DateTimeBaseProps {
  children: string | React.ReactChildren
  dateTime: string
  className?: string
}
export type DateTimeProps = DateTimeBaseProps &
  React.TimeHTMLAttributes<any> & { className: string }
