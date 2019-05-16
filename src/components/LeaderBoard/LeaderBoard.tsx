import * as React from 'react'
import { StyledLeaderBoard } from './styled'

export default class LeaderBoard extends React.PureComponent<
  React.ComponentProps<typeof StyledLeaderBoard>
> {
  render() {
    return <StyledLeaderBoard {...this.props} />
  }
}
