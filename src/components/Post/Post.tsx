/**
 * we could expand the block here to show content, but it's not in requirements
 */
import * as React from 'react'
import { EMPTY_OBJ } from '../../utils/EMPTY'
import { RedditLitePostItemType } from '../../typings'
import { StyledMaterialIcon } from '../MaterialIcon'
import { Score } from './Score'
import { PostProps } from './typings'
import {
  StyledCardArticle,
  StyledPostedBy,
  StyledAuthorLink,
  StyledTitle,
  StyledTitleLink,
  StyledCommentsLink,
  StyledDateTime,
  StyledControlArea,
  StyledPreview,
  StyledPostDateGroup,
} from './styled'

export default class Post extends React.PureComponent<
  PostProps & { item: RedditLitePostItemType }
> {
  render() {
    const { item = EMPTY_OBJ, ...remainingProps } = this.props
    const {
      title,
      body,
      score = 10,
      authorFullName = 'aretecode',
      createdAtIso,
      createdAtPretty,
      commentCount,
      imageUrl,
      url,
    } = item

    return (
      <StyledCardArticle {...remainingProps}>
        <Score>{score}</Score>
        <StyledPreview src={imageUrl !== '' ? imageUrl : undefined} />
        {this.props.children}
        <StyledTitleLink href={url}>
          <StyledTitle>{title}</StyledTitle>
        </StyledTitleLink>

        <StyledPostDateGroup>
          <StyledPostedBy>Posted by</StyledPostedBy>
          <StyledAuthorLink
            to={`https://www.reddit.com/user/${authorFullName}`}
          >
            {authorFullName}
          </StyledAuthorLink>
          <StyledDateTime dateTime={createdAtIso} title={createdAtIso}>
            {createdAtPretty} ago
          </StyledDateTime>
        </StyledPostDateGroup>

        <StyledControlArea>
          <StyledCommentsLink to={`${url}`}>
            <StyledMaterialIcon icon="comment" />
            {commentCount} comments
          </StyledCommentsLink>
        </StyledControlArea>
      </StyledCardArticle>
    )
  }
}
