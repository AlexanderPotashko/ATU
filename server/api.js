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

apiRouter.use('/api/:source', (req, res) => {
  const source = req.params.source

  wrapperRequest(source).then((data) => {
    res.send(data)
  })
})

export default apiRouter
