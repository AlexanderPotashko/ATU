import {call, put, takeEvery} from 'redux-saga/effects'
import {callFetchUsers} from './api'
import {FETCH_USERS} from '../../actions'

function* fetchPosts(action) {
  try {
    const payload = yield call(callFetchUsers, action.data)

    yield put({type: FETCH_USERS.SUCCESS, payload})
  } catch (e) {
    yield put({type: FETCH_USERS.FAILURE, message: e.message})
  }
}

function* posts() {
  yield takeEvery(FETCH_USERS.REQUEST, fetchPosts)
  
}

export default posts 
