import {createReducer} from '../utils'
import {FETCH_USERS} from '../actions'

const initialState = {
  byId: {}
}

const users = createReducer(initialState, {
  [FETCH_USERS.FAILURE]: (state) => ({...state, byId: {}}),
  [FETCH_USERS.REQUEST]: (state) => ({...state, byId: {}}),
  [FETCH_USERS.SUCCESS]: (state, {payload}) => ({
    ...state,
    byId: payload.response.reduce((byId, curr) => {
      byId[curr.id] = curr

      return byId
    }, {})
  })
})

export default users
