import {createReducer} from '../utils'
import {FETCH_COMMENTS} from '../actions'

const initialState = {
  list: []
}

const comments = createReducer(initialState, {
  [FETCH_COMMENTS.FAILURE]: (state) => ({...state, list: []}),
  [FETCH_COMMENTS.REQUEST]: (state) => ({...state, list: []}),
  [FETCH_COMMENTS.SUCCESS]: (state, {payload}) => ({
    ...state, list: payload.response
  })
})

export default comments
