import {createAction, createRequest, createRequestTypes} from '../utils'

export const INIT_PROJECT = 'INIT_PROJECT'
export const FETCH_POSTS = createRequestTypes('FETCH_POSTS')

export const init = () => createAction(INIT_PROJECT)
export const fetchPosts = createRequest(FETCH_POSTS)
