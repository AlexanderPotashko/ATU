import {call, put, takeEvery} from 'redux-saga/effects'
import {callFetchPosts} from './api'
import {FETCH_POSTS} from '../../actions'

function* fetchPosts(action) {
  try {
    const payload = yield call(callFetchPosts, action.data)

    yield put({type: FETCH_POSTS.SUCCESS, payload})
  } catch (e) {
    yield put({type: FETCH_POSTS.FAILURE, message: e.message})
  }
}

function* posts() {
  yield takeEvery(FETCH_POSTS.REQUEST, fetchPosts)
  
}

export default posts 
