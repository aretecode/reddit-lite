/**
 * @note this is near the minimum possible redux config
 * I much prefer http://mobx.js.org
 * and when using graphql, the usual complications done inside of redux are not required
 * so it's not using redux because redux is needed here, it's just because it's a requirement
 *
 * to use a full redux setup while fetching data from it
 * will mean using thunk, or saga
 * adding actions for loading, error, success
 * to persist the data we will need more middleware, which we've already replaced with apollo
 *
 * 1. middleware would be composed & connected
 * 2. data would be fetched in actions
 * 3. data would be dereferenced in reducers
 * 4. we'd split into many, many files
 * 5. we'd use something to reduce boilerplate
 * 6. we'd drop it all together for better solutions
 *
 * @see https://medium.com/@dan_abramov/it-is-crucial-that-the-person-using-this-technique-understands-when-its-time-to-introduce-real-b74a0db75ef7
 * @see https://www.robinwieruch.de/react-redux-apollo-client-state-management-tutorial/
 */
import { createStore, Reducer } from 'redux'

const init = {
  list: [],
  params: {
    before: '',
    after: '',
    limit: 20,
  },
}

export interface ItemWithIdType {
  id: string
  [key: string]: unknown
}

/**
 * @note items do not have === equality
 * @note immutable.js would solve this, as would mobx, as would apollo
 *       this is being done just as an example for the sake of covering that area of redux
 *
 * @description this checks other items in the array to make sure we don't have any other items with the same id
 */
function isUniqById(
  item: ItemWithIdType,
  index: number,
  array: ItemWithIdType[]
) {
  return (
    array.some(otherItem => otherItem !== item && otherItem.id === item.id) ===
    false
  )
}

const reducer: Reducer = (state = init, action) => {
  switch (action.type) {
    case 'POSTS': {
      const { list, ...remainingPayload } = action.payload
      return {
        ...state,
        ...remainingPayload,
        list: list.filter(isUniqById),
      }
    }
  }
  return state
}

const update = (payload: unknown) => {
  return {
    type: 'POSTS',
    payload,
  }
}

const WINDOW_REALM = process.browser && (window as any)

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' &&
    process.browser &&
    WINDOW_REALM.__REDUX_DEVTOOLS_EXTENSION__ &&
    WINDOW_REALM.__REDUX_DEVTOOLS_EXTENSION__()
)

if (process.env.NODE_ENV === 'development' && process.browser) {
  WINDOW_REALM.update = update
}

export { store, update }
