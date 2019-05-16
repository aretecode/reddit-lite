# Reddit Lite (React Clone)

> displays a list of posts in any subreddit, 25 at a time with the ability to page for more.

[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/aretecode/reddit-lite)
[![Build Status](https://travis-ci.org/aretecode/reddit-lite.svg?branch=master)](https://travis-ci.org/aretecode/reddit-lite)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/aretecode/reddit-lite)

## Usage
1. to select a subReddit, append `subReddit=NAME_HERE` to the search params (_[example here](https://reddit-lite.aretecode.now.sh/?subReddit=canada)_)
2. to use a custom graphql endpoint, use `graphql=API_URL_HERE` in the search params (_[example here](https://reddit-lite.aretecode.now.sh/?subReddit=canada&graphql=https://reddit-lite-graphql.now.sh/graphql)_)


## Development

```bash
git clone git@github.com:aretecode/reddit-lite.git

yarn install
yarn dev
```

#### Storybook
```bash
yarn dev:storybook
```
#### Tests
```bash
yarn test
```

## Requirements/Priorities

> "it doesn’t exist if it’s not written down”

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
4. initial component shells (_page, header, list, default styles_)
5. api data
6. defining the data model
7. tests
8. data flow
9. deploy
10. more tests, polish

## API

- [aretecode/reddit-lite-graphql](https://github.com/aretecode/reddit-graphql) contains the important apollo graphql server around the reddit api
- [example json response](https://reddit.com/r/vancouver.json) (_add .json to any subreddit_)
- [reddit - official api](https://www.reddit.com/dev/api/) (_not required... yet_)

## Stack

- [react](https://github.com/facebook/react/) ui framework
- [next.js](https://nextjs.org/) for quick starting SSR ready react apps
- [redux](https://github.com/reduxjs/redux) state management (_though we do not need it much here_) with [hooks](https://medium.freecodecamp.org/how-to-integrate-react-hooks-into-your-project-without-changing-your-redux-code-974e6f70f0b0)
- [apollo graphql](https://github.com/apollographql/apollo-client) to use the reddit api in a better way, decoupling frontend from backend.
- [styled-components](https://www.styled-components.com/) for the best css in es6 solution
- [stylelint](https://stylelint.io/user-guide/css-processors/) to lint our css (_integrated with styled-components_)
- [typescript](https://www.typescriptlang.org/) for type safe, scalable js
- [editorconfig](https://editorconfig.org/) for consistent formatting across editors
- [eslint](https://eslint.org/) with [eslint-plugin-typescript](https://github.com/typescript-eslint/typescript-eslint) to lint our js and ts (_since it has some rules not included in tslint_)
- [tslint](https://palantir.github.io/tslint/) to lint typescript
- [jest](https://jestjs.io/) for unit testing
- [travis-ci](https://travis-ci.org/) to run those tests
- [danger-js](https://danger.systems/js/) to automate common PR chores (_just to comment files changed in PRs here_)
- [Makefile](https://gist.github.com/isaacs/62a2d1825d04437c6f08) classic build system to simply run our tasks by just typing `make`
- [zeit now](https://zeit.co/now) to quickly and easily deploy code
- [material design icons](https://material.io/tools/icons/) simple SVG icon components
- [yarn](https://yarnpkg.com/en/) to handle package management **NOTE**: the `resolutions` are used to de-duplicate dependencies from dependencies of dependencies
- [storybook](https://github.com/storybooks/storybook) to run our components in their own page easily
- [babel](https://babeljs.io/) with [babel-preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) to integrate with next.js and add polyfills where required

## Code Structure

- as per default [next.js](https://github.com/zeit/next.js/), `pages` are in `pages/*` (_along with `_app.tsx` and `_document.tsx` which basically setup every page_), the rest is in `src/`
- `src/AppStyles` has the default app styles
- `src/graphql` contains apollo client, and the queries
- `src/redux` our redux state
- `src/utils` common utils **NOTE**: for this project, they have been tested externally and copied in, they can be published as their own libraries, or swapped for external libraries
- each component (_generally_) contains
  - `index.ts` exports the other files
  - `FolderNameHere.tsx` this means we have `FolderNameHere/FolderNameHere.tsx` which makes it very easy to find when searching components
  - `FolderNameHere.story.tsx` the storybook story (_at least a `default` story_)
  - `__tests__` with jest unit tests (_at least a `snapshot` test of exports &| render_)
  - `styled.ts` elements used by other components, and styled() wrappings of components for use in easy styling
  - `renderProps.tsx` if any renderProps exist, they are here
  - `typings` typescript interfaces & typings if they exist

## Learn More

- [reddit graphql - code](https://github.com/clayallsopp/graphqlhub/blob/master/graphqlhub-schemas/src/reddit.js)
- [reddit graphql - graphqlhub](<https://www.graphqlhub.com/playground?query=%7B%0A%20%09reddit%20%7B%0A%20%20%20%20user(username%3A%20%22kn0thing%22)%20%7B%0A%20%20%20%20%20%20username%0A%20%20%20%20%20%20commentKarma%0A%20%20%20%20%20%20createdISO%0A%20%20%20%20%7D%0A%20%20%20%20subreddit(name%3A%20%22movies%22)%7B%0A%20%20%20%20%20%20newListings(limit%3A%202)%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20%20%20%20%20body%0A%20%20%20%20%20%20%20%20%20%20author%20%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20username%0A%20%20%20%20%20%20%20%20%20%20%09commentKarma%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
- [Example reddit - official reddit site](https://www.reddit.com/r/vancouver/)
- [Official Redux Example with reddit](https://redux.js.org/advanced/example-reddit-api)
- [Example Redux Example with reddit - codesandbox](https://codesandbox.io/s/72j28q2k50)
- [Example Redux React Client with Semantic UI](https://github.com/iksz1/reddit-client)
- [Reddit React Native](https://codeburst.io/creating-a-reddit-reader-in-react-native-with-expo-styled-components-and-redux-saga-21e7fffba20e)
