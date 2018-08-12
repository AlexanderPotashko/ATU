import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classnames from 'classnames/bind'

import * as actions from '../../../store/actions'
import {callFetchPosts} from '../../../store/sagas/posts/api'
import styles from './Home.scss'

const cx = classnames.bind(styles)

class Home extends Component {
  static fetchData (store) {
    return new Promise((resolve) => {
      callFetchPosts().then((data) => {
        store.dispatch(actions.fetchPosts.success(data.response))
        resolve()
      })
    })
  }

  renderPost ({title, body}, key) {
    return (<div className={cx('postItem')} key={key}>
      <div className={cx('postItemTitle')}><h2>{title}</h2></div>
      <div className={cx('postItemText')}>{body}</div>
    </div>)
  }

  renderPosts () {
    const {posts} = this.props

    if (posts.length === 0) {
      return null
    }

    return posts.map(this.renderPost.bind(this))
  }

  render () {
    return (<div className={cx('container')}>
      {this.renderPosts()}
    </div>)
  }
}

Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number
  }))
}

const mapStateToProps = (state) => ({
  posts: state.posts.list
})

export default connect(mapStateToProps)(Home)
