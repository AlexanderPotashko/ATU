import {all} from 'redux-saga/effects'

import posts from './posts'
import users from './users'
import comments from './comments'

export default function* rootSaga() {
  yield all([
    posts(),
    users(),
    comments()
  ])
}
