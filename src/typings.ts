/**
 * === basics ===
 */
export type Primitive = string | number | boolean | symbol | null | undefined | void

export type SafePrimitive = string | number | boolean | symbol

/**
 * === serialized ===
 */
export interface SerializedObj {
  [key: string]: Primitive | FrozenSerializedObj | FrozenSerializedArray
  [key: number]: Primitive | FrozenSerializedObj | FrozenSerializedArray
}

export type FrozenSerializedObj = Readonly<SerializedObj>

export interface FrozenSerializedArray extends Readonly<Serialized[]> {
  readonly(x: number): Serialized
}

export type Serialized = SerializedObj | Primitive | FrozenSerializedObj | FrozenSerializedArray

export type Real = AnyArrayOrObj | SafePrimitive

/**
 * === any ===
 */

export interface AnyObj extends Object {
  [key: string]: any
  [key: number]: any
}

export type AnyArray = any[]

export type AnyArrayOrObj = (AnyObj & AnyArray) | AnyObj | AnyArray

export type AnyFunction = (...args: any[]) => any

/**
 * === unknown ===
 */
export interface UnknownObj {
  [key: string]: unknown
}

export type UnknownArray = unknown[]

/**
 * === helpers ===
 */

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type RecursiveRequired<Type> = {[Key in keyof Type]-?: RecursiveRequired<Type[Key]>}

/**
 * @description to add __typename
 * @todo this does not work if it is using a type union
 *    @example `Eh[] | string[]`
 */
export type WithTypeNameRecursive<Type extends {}> = {
  [Key in keyof Type]: Type[Key] extends Primitive | Primitive[]
    ? Type[Key]
    : Type[Key] extends any[]
    ? WithTypeNameRecursive<Type[Key]>
    : Type[Key] extends {}
    ? Type[Key] & {__typename: string}
    : Type[Key]
} & {__typename?: string}

/**
 * === empty ===
 */

export type Empty = {[key: string]: never} | EmptyArray | '' | EmptySet | EmptyMap
export interface EmptyMap<Key = string, Value = any> extends Map<Key, Value> {
  size: 0
}
export interface EmptySet<Value = any> extends Set<Value> {
  size: 0
}
export interface EmptyArray<Value = any> extends Array<Value> {
  length: 0
}
export type EmptyFunctionType = () => void

/**
 * === apollo ===
 */
import { ApolloCache } from 'apollo-cache'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'

export type ResolverContext<ContextType extends object = {}> = {
  [key: string]: unknown
  cache: ApolloCache<NormalizedCacheObject>
} & ContextType

export type Resolver<
  ArgsType extends object = AnyObj,
  ContextType extends object = {},
  ResponseType extends object = AnyObj
> = (
  obj: unknown,
  args: ArgsType,
  context: ResolverContext<ContextType>,
  info: unknown
) => ResponseType | Promise<ResponseType>

export interface Resolvers<
  ArgsType extends object = AnyObj,
  ContextType extends object = {},
  ResponseType extends object = AnyObj
> {
  Mutation?: {[key: string]: Resolver<ArgsType, ContextType, ResponseType>}
  Query?: {[key: string]: Resolver<ArgsType, ContextType, ResponseType>}
}

/**
 * === graphql react ===
 */
import { QueryResult, OperationVariables } from 'react-apollo'

export interface GraphqlPropsLoading<ResponseDataType = any> {
  loading: true
  data?: undefined
}

export interface GraphqlPropsLoaded<ResponseDataType> {
  loading: false | boolean
  data: ResponseDataType
}

export type GraphqlPropsLoadingOrLoaded<ResponseDataType> =
  | GraphqlPropsLoaded<ResponseDataType>
  | GraphqlPropsLoading<ResponseDataType>

export type PartialReadonly<Type> = Partial<Readonly<Type>>

export type GraphqlProps<
  ResponseDataType extends object = AnyObj,
  VariablesType extends OperationVariables = OperationVariables
> = {
  /**
   * @see https://github.com/Microsoft/TypeScript/issues/24413
   * @description not sure how this override will affect the condition ^
   */
  loading: boolean
  error?: Error
} & Readonly<QueryResult<ResponseDataType, VariablesType>>

/**
 * === responses ===
 */

/**
 * @todo this will be moved out to graphql
 * @todo these are WIP typings, may not be 100% complete for reddit schema
 *
 * @note put the json through http://json2ts.com/ then simplified and improved naming & typings
 */
export interface RedditPostImageSourceType {
  url: string
  width: number
  height: number
}
export interface RedditPostImageResolutionType {
  url: string
  width: number
  height: number
}
export interface RedditPostImageType {
  source: RedditPostImageSourceType
  resolutions: RedditPostImageResolutionType[]
  variants: {}
  id: string
}
export interface RedditPostPreviewType {
  images: RedditPostImageType[]
  enabled: boolean
}

export interface RedditPostItemType {
  approved_at_utc?: null | undefined
  subreddit: string
  selftext: string
  author_fullname: string
  saved: boolean
  mod_reason_title?: null | undefined
  gilded: number
  clicked: boolean
  title: string
  link_flair_richtext: null | undefined[]
  subreddit_name_prefixed: string
  hidden: boolean
  pwls: number
  link_flair_css_class: string
  downs: number
  thumbnail_height?: number
  hide_score: boolean
  name: string
  quarantine: boolean
  link_flair_text_color: string
  author_flair_background_color: string
  subreddit_type: string
  ups: number
  total_awards_received: number
  media_embed: {}
  thumbnail_width?: number
  author_flair_template_id?: null | undefined
  is_original_content: boolean
  user_reports: null | undefined[]
  secure_media?: null | undefined
  is_reddit_media_domain: boolean
  is_meta: boolean
  category?: null | undefined
  secure_media_embed: {}
  link_flair_text: string
  can_mod_post: boolean
  score: number
  approved_by?: null | undefined
  thumbnail: string
  edited: boolean
  author_flair_css_class: string
  author_flair_richtext: null | undefined[]
  gildings: {}
  content_categories?: null | undefined
  is_self: boolean
  mod_note?: null | undefined
  created: number
  link_flair_type: string
  wls: number
  banned_by?: null | undefined
  author_flair_type: string
  domain: string
  selftext_html: string
  likes?: null | undefined
  suggested_sort?: null | undefined
  banned_at_utc?: null | undefined
  view_count?: null | undefined
  archived: boolean
  no_follow: boolean
  is_crosspostable: boolean
  pinned: boolean
  over_18: boolean
  all_awardings: null | undefined[]
  media_only: boolean
  can_gild: boolean
  spoiler: boolean
  locked: boolean
  author_flair_text: string
  visited: boolean
  num_reports?: null | unknown
  distinguished: string
  subreddit_id: string
  mod_reason_by?: null | unknown
  removal_reason?: null | unknown
  link_flair_background_color: string
  id: string
  is_robot_indexable: boolean
  report_reasons?: null | unknown
  author: string
  num_crossposts: number
  num_comments: number
  send_replies: boolean
  whitelist_status: string
  contest_mode: boolean
  mod_reports: null | unknown[]
  author_patreon_flair: boolean
  author_flair_text_color: string
  permalink: string
  parent_whitelist_status: string
  stickied: boolean
  url: string
  subreddit_subscribers: number
  created_utc: number
  media?: any
  is_video: boolean
  post_hint: string
  preview: RedditPostPreviewType
}
export interface RedditPostChildType {
  kind: string
  data: RedditPostItemType
}
export interface RedditBasicResponseDataType {
  modhash: string
  dist: number
  children: RedditPostChildType[]
  after?: string
  before?: any
}
export interface RedditBasicResponseType {
  kind: string
  data: RedditBasicResponseDataType
}

/**
 * === our data ===
 */

export type RedditLitePostKindType = 'text' | 'link' | 'url' | ''
export interface RedditLitePostItemType {
  id: string
  postKind: RedditLitePostKindType
  title: string
  /**
   * body of the post
   */
  body: string
  /**
   * reddit absolute url
   */
  url: string
  /**
   * has been stickied
   */
  isSticky: boolean

  /**
   * made up of `.ups` - `.downs`
   */
  score: number

  /**
   * @note could nest these, but flat is easiest
   */

  /**
   * actual name / username
   */
  authorFullName: string
  /**
   * shows up after the author
   */
  authorFlairText: string

  /**
   * total comments
   */
  commentCount: number
}
