import express from 'express'
import fetch from 'isomorphic-fetch'

const request = async (endpoint) => await fetch(endpoint)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })

const wrapperRequest = (endpoint) => request(`https://jsonplaceholder.typicode.com/${endpoint}`)

const apiRouter = express.Router()

apiRouter.use('/api/comments', (req, res) => {
  console.log('/api/comments')
  const postId = req.body.id

  wrapperRequest(`comments?postId=${postId}`).then((data) => {
    res.send(data)
  })
})

apiRouter.use('/api/:source', (req, res) => {
  console.log('/api/:source')
  const source = req.params.source

  wrapperRequest(source).then((data) => {
    res.send(data)
  })
})

export default apiRouter
