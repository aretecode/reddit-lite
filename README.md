# Reddit Lite (React Clone)

> displays a list of posts in any subreddit, 25 at a time with the ability to page for more.

[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/aretecode/reddit-lite)
[![Build Status](https://travis-ci.org/aretecode/reddit-lite.svg?branch=master)](https://travis-ci.org/aretecode/reddit-lite)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/aretecode/reddit-lite)

## Development

```bash
git clone git@github.com:aretecode/reddit-lite.git

yarn install
yarn dev
```

## Requirements/Priorities

1. Minimal, simple styles, high code quality
2. Each post must include (_the "classic" view_)

- title
- link to the post/site
- a thumbnail if it exists
- the user who posted it
- time submitted
- a link to the comments on reddit

3. The viewer must automatically refresh the data every minute (_ideally, without losing position of the page so that the content doesn’t jump around_).

4. Don't use a Reddit API library
5. Basic documentation

## Execution

> _can move execution to github project if needed_

1. project requirements
2. research
3. project setup (_readme, configs, utils, typings, ssr setup [since we are using next.js]_)
4. initial component shells (_page, header, list, default styles_) < **current**
5. api data
6. defining the data model
7. tests
8. data flow
9. deploy
10. more tests, polish

## API

- [example json response](https://reddit.com/r/vancouver.json) (_add .json to any subreddit_)
- [reddit - official api](https://www.reddit.com/dev/api/) (_not required... yet_)

## Learn More

- [reddit graphql - code](https://github.com/clayallsopp/graphqlhub/blob/master/graphqlhub-schemas/src/reddit.js)
- [reddit graphql - graphqlhub](<https://www.graphqlhub.com/playground?query=%7B%0A%20%09reddit%20%7B%0A%20%20%20%20user(username%3A%20%22kn0thing%22)%20%7B%0A%20%20%20%20%20%20username%0A%20%20%20%20%20%20commentKarma%0A%20%20%20%20%20%20createdISO%0A%20%20%20%20%7D%0A%20%20%20%20subreddit(name%3A%20%22movies%22)%7B%0A%20%20%20%20%20%20newListings(limit%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%20%20author%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20username%0A%20%20%20%20%20%20%20%20%20%20%09commentKarma%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
- [Example reddit - official reddit site](https://www.reddit.com/r/vancouver/)
- [Official Redux Example with reddit](https://redux.js.org/advanced/example-reddit-api)
- [Example Redux Example with reddit - codesandbox](https://codesandbox.io/s/72j28q2k50)
- [Example Redux React Client with Semantic UI](https://github.com/iksz1/reddit-client)
- [Reddit React Native](https://codeburst.io/creating-a-reddit-reader-in-react-native-with-expo-styled-components-and-redux-saga-21e7fffba20e)
