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
 * @see https://medium.com/@dan_abramov/it-is-crucial-that-the-person-using-this-technique-understands-when-its-time-to-introduce-real-b74a0db75ef7
 * @see https://www.robinwieruch.de/react-redux-apollo-client-state-management-tutorial/
 */
import { createStore, Reducer } from 'redux'

const init = {
  // not using this for anything
}

const reducer: Reducer = (state = init, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        ...action.payload,
      }
  }
  return state
}

const update = (payload: unknown) => {
  return {
    type: 'UPDATE',
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
