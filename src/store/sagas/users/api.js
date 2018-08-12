import fetchApi from '../../services/fetch'

export const callFetchUsers = (data) => fetchApi('users', 'POST', data)
