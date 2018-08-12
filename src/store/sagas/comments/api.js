import fetchApi from '../../services/fetch'

export const callFetchComments = (id) => fetchApi('comments', 'POST', {id})
