import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import classnames from 'classnames/bind'

import Post from '../../presentational/Post'

import fetchPostsData from '../../../store/fetchPostsData'

import styles from './Posts.scss'

const cx = classnames.bind(styles)

class Posts extends Component {
  static fetchData (store) {
    return fetchPostsData(store)
  }

  renderPost ({id, userId, title, body}, key) {
    const {users} = this.props
    const user = users[userId]

    return (<div key={key} className={cx('item')}>
      <Link to={`/posts/${id}`} >
        <Post
        id={id}
        title={title}
        text={body}
        userId={user.id}
        userName={user.name}
        />
      </Link>
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

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number
  })),
  users: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}

const mapStateToProps = (state) => ({
  posts: state.posts.list,
  users: state.users.byId
})

export default connect(mapStateToProps)(Posts)
