import {createReducer} from '../utils'
import {FETCH_POSTS} from '../actions'

const initialState = {
  list: []
}

const posts = createReducer(initialState, {
  [FETCH_POSTS.FAILURE]: (state) => ({...state, list: []}),
  [FETCH_POSTS.REQUEST]: (state) => ({...state, list: []}),
  [FETCH_POSTS.SUCCESS]: (state, {payload}) => ({
    ...state, list: payload.response
  })
})

export default posts
