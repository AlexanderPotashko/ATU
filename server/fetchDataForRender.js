import url from 'url'
import { matchPath } from 'react-router-dom'

import Posts from '../src/components/containers/Posts'
import Comments from '../src/components/containers/Comments'

const ROUTES_THAT_FETCH_DATA = [
  {
    path: '/',
    component: Posts,
    exact: true
  },
  {
    path: '/posts/:id',
    component: Comments,
    exact: true
  }
]

const fetchDataForRender = (req, store) => {
  const promises = []

  ROUTES_THAT_FETCH_DATA.some(route => {
    const match = matchPath(url.parse(req.url).pathname, route)

    if (match) {
      const promise =
        route.component &&
        route.component.fetchData &&
        route.component.fetchData(store, match)

      promises.push(promise)
    }

    return match
  })

  return Promise.all(promises)
}

export default fetchDataForRender
