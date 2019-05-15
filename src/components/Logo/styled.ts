import styled from 'styled-components'
import { RedditTextLogo } from './RedditTextLogo'
import { RedditAvatarLogo } from './RedditAvatarLogo'

export const StyledRedditAvatarLogo = styled(RedditAvatarLogo)`
  width: 20px;
`
export const StyledRedditTextLogo = styled(RedditTextLogo)`
  margin-left: 0.5rem;
  padding-bottom: 5px;
  width: 0px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 1024px) {
    width: 57px;
  }
`
