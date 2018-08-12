import fetchApi from '../../services/fetch'

export const callFetchPosts = (data) => fetchApi('posts', 'GET', data)
