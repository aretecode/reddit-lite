require('intersection-observer')
require('raf').polyfill(global)
require('react-testing-library/cleanup-after-each')
require('jest-styled-components')

const globalAny = global
globalAny.fetch = require('node-fetch')
