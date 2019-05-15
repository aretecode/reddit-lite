import * as React from 'react'
import { faExpand, faComment } from '@fortawesome/free-solid-svg-icons'
import { EMPTY_OBJ } from '../../utils/EMPTY'
import { RedditLitePostItemType } from '../../typings'
import { Score } from './Score'
import { PostProps } from './typings'
import {
  StyledCardArticle,
  StyledPostedBy,
  StyledAuthorLink,
  StyledTitle,
  StyledCommentsButton,
  StyledDateTime,
  StyledFontAwesomeIcon,
  StyledControlArea,
  StyledPreview,
  StyledPostDateGroup,
} from './styled'

export default class Post extends React.PureComponent<PostProps & {item: RedditLitePostItemType}> {
  render() {
    const {item = EMPTY_OBJ, ...remainingProps} = this.props
    const {
      title,
      body,
      score = 10,
      authorFullName = 'aretecode',
      createdAtIso,
      createdAtPretty,
      commentCount,
      imageUrl,
    } = item

    console.log(item)

    return (
      <StyledCardArticle {...remainingProps}>
        <Score>{score}</Score>
        <StyledPreview src={imageUrl !== '' ? imageUrl : undefined} />
        {this.props.children}
        <StyledTitle>{title}</StyledTitle>

        <StyledPostDateGroup>
          <StyledPostedBy>Posted by</StyledPostedBy>
          <StyledAuthorLink to={'https://www.reddit.com/user/' + authorFullName}>
            {authorFullName}
          </StyledAuthorLink>
          <StyledDateTime dateTime={createdAtIso} title={createdAtIso}>
            {createdAtPretty} ago
          </StyledDateTime>
        </StyledPostDateGroup>

        <StyledControlArea>
          <StyledFontAwesomeIcon
            title="expand icon for description... or link to image"
            icon={faExpand}
          />
          <StyledCommentsButton>
            <StyledFontAwesomeIcon icon={faComment} />
            {commentCount} comments
          </StyledCommentsButton>
        </StyledControlArea>
      </StyledCardArticle>
    )
  }
}
