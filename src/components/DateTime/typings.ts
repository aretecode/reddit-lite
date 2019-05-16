import * as React from 'react'

export interface DateTimeBaseProps {
  children: React.ReactNode
  dateTime: string
}
export type DateTimeProps = DateTimeBaseProps &
  React.TimeHTMLAttributes<any> & {
    className?: string
  }
