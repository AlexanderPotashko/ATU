import React from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';

import '../styles/nav.css'
import * as metadata from '../metadata';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'homePage' */ './pages/Home'),
  loading() {
    return <div>Loading...</div>;
  }
})

const LoadableGrid = Loadable({
  loader: () => import(/* webpackChunkName: 'gridPage' */ './pages/Grid'),
  loading() {
    return <div>Loading...</div>;
  }
})

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'aboutPage' */ './pages/About'),
  loading() {
    return <div>Loading...</div>;
  }
})

const App = () => (<div className='app'>
  <Helmet
    title={metadata.title}
    meta={metadata.meta}
    link={metadata.link}
    script={metadata.script}
    noscript={metadata.noscript}

  />
  <div className='nav'>
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/grid" activeClassName="active">
        Flexbox Grid
      </NavLink>
      <NavLink exact to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  </div>
  <div>
  <Switch>
    <Route exact path='/' component={LoadableHome} />
    <Route path='/grid' component={LoadableGrid} />
    <Route path='/about' component={LoadableAbout} />
  </Switch>
  </div>
</div>)

export default App
