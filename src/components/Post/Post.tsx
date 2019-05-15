import * as React from 'react'
import { StyledCardArticle } from './styled'
import { Score } from './Score'
import { PostProps } from './typings'

export default class Post extends React.PureComponent<PostProps> {
  render() {
    const {score = 10} = this.props

    return (
      <StyledCardArticle>
        <Score>{score}</Score>
        {this.props.children}
      </StyledCardArticle>
    )
  }
}
