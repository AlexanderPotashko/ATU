import React from 'react'
import {withRouter} from 'react-router'
import PropTypes from 'prop-types'

import Posts from '../../containers/Posts'
import Comments from '../../containers/Comments'

import styles from './Home.scss'

const HomePage = (props) => (<div className={styles.container}>
  {(props.match.path === '/')
    ? (<Posts />)
    : (<Comments />)
  }
</div>)

HomePage.propTypes = {
  match: PropTypes.object
}

export default withRouter(HomePage)
