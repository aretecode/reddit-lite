// if we import this, it fails
// import { NormalizedCacheObject } from 'apollo-boost'
interface NormalizedCacheObject {
  [key: string]: unknown
}

declare global {
  interface Window {
    readonly __APOLLO_STATE__: NormalizedCacheObject
    readonly __APP_STATE__: {[key: string]: unknown}
  }
}

interface Window {
  readonly __APOLLO_STATE__: {[key: string]: unknown}
  readonly __APP_STATE__: {[key: string]: unknown}
}

declare namespace NodeJS {
  interface Global {
    process: Process
  }
  interface ProcessEnv {
    NODE_ENV: 'test' | 'development' | 'production'
    IS_NOW: 'true' | 'false' | undefined
    READONLY: 'true' | 'false' | undefined
    GRAPHQL_API_URL: string
  }
  interface Process {
    browser: boolean
    env: ProcessEnv
  }
}
