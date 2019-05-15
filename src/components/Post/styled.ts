import styled from 'styled-components'
import { StyledLink } from '../Link'
import { DateTime } from '../DateTime'

/**
 * @see https://material.io/design/components/cards.html#anatomy
 * @see https://material-components.github.io/material-components-web-catalog/#/component/elevation
 * @see https://material-components.github.io/material-components-web-catalog/#/component/card
 */
export const StyledCardArticle = styled.article`
  margin: 0;
  padding: 1rem;

  background-color: #fff;

  width: 100%;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  border-radius: 0.125rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  display: flex;
  flex-wrap: wrap;
`

export const StyledPostedBy = styled.span`
  color: rgb(120, 124, 126);
`
export const StyledTitle = styled.h2`
  color: #1b1b1b;
  flex-basis: 60%;
  width: 60%;
  display: inline-flex;
  padding-left: 1rem;
`
export const StyledAuthorLink = styled(StyledLink)`
  color: rgb(120, 124, 126);
  margin-left: 0.25rem;
`
/**
 * accessibility wise, this would be a button if we had a modal
 */
export const StyledCommentsLink = styled(StyledLink)`
  color: rgb(120, 124, 126);
  margin-left: 0.25rem;
`
export const StyledDateTime = styled(DateTime)`
  margin-left: 0.25rem;
  color: rgb(120, 124, 126);
`
export const StyledControlArea = styled.div`
  display: flex;
  width: 100%;
`

export const StyledPreview = styled.img.attrs({
  src: 'https://via.placeholder.com/150',
} as {})`
  display: inline-flex;
  width: 150px;
  background: grey;
`

export const StyledPostDateGroup = styled.p`
  display: flex;
  width: 100%;
`

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  max-width: 14px;
  max-height: 16px;
  align-self: center;
  margin-left: 0.25rem;
`
