import {callFetchPosts} from './sagas/posts/api'
import {callFetchUsers} from './sagas/users/api'

import * as actions from './actions'

function wrapper (apiCall, request) {
  return new Promise((resolve) => apiCall()
    .then((data) => resolve(this.dispatch(request.success(data.response))))
  )
}

export default function fetchPostsData (store) {
  const callWrapper = wrapper.bind(store)

  return Promise.all([
    callWrapper(callFetchPosts, actions.fetchPosts),
    callWrapper(callFetchUsers, actions.fetchUsers)
  ])
}
