import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

import indexHtml from './indexHtml'
import App from '../src/components/App'
import configureStore from '../src/store/configureStore'
import fetchDataForRender from './fetchDataForRender'

const renderServerSideApp = (req, res) => {
  const store = configureStore(undefined)

  fetchDataForRender(req, store).then(() => {
    const context = {}
    const modules = []

    const markup = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    );

    const stats = require('../build/react-loadable.json')
    const bundles = getBundles(stats, modules)

    if (context.url) {
      res.redirect(context.url)
    } else {
      const helmet = Helmet.renderStatic()
      const fullMarkup = indexHtml({
        initialState: store.getState(),
        bundles,
        helmet,
        markup
      })

      res.status(200).send(fullMarkup)
    }
  });
};

export default renderServerSideApp
