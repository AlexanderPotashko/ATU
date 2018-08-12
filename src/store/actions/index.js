import {createAction, createRequest, createRequestTypes} from '../utils'

export const INIT_PROJECT = 'INIT_PROJECT'

export const FETCH_POSTS = createRequestTypes('FETCH_POSTS')
export const FETCH_USERS = createRequestTypes('FETCH_USERS')
export const FETCH_COMMENTS = createRequestTypes('FETCH_COMMENTS')

export const init = () => createAction(INIT_PROJECT)

export const fetchPosts = createRequest(FETCH_POSTS)
export const fetchUsers = createRequest(FETCH_USERS)
export const fetchComments = createRequest(FETCH_COMMENTS)
