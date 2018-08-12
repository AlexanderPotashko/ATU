import {call, put, takeEvery} from 'redux-saga/effects'
import {callFetchComments} from './api'
import {FETCH_COMMENTS} from '../../actions'

function* fetchComments(action) {
  try {
    const payload = yield call(callFetchComments, action.payload.data.id)

    yield put({type: FETCH_COMMENTS.SUCCESS, payload})
  } catch (e) {
    yield put({type: FETCH_COMMENTS.FAILURE, message: e.message})
  }
}

function* comments() {
  yield takeEvery(FETCH_COMMENTS.REQUEST, fetchComments)
  
}

export default comments 

