import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'
import classnames from 'classnames/bind'

import Post from '../../presentational/Post'
import CommentItem from '../../presentational/CommentItem'

import * as actions from '../../../store/actions'
import fetchPostsData from '../../../store/fetchPostsData'

import styles from './Comments.scss'

const cx = classnames.bind(styles)

class Comments extends Component {
  static fetchData (store) {
    return fetchPostsData(store)
  }

  constructor (props) {
    super(props)

    const post = this.getPost()

    props.actions.fetchComments({id: post.id})
  }

  getPost () {
    const {match, posts} = this.props

    return posts.filter(({id}) => (id === +match.params.id))[0] || {}
  }

  renderComment ({name, body}, key) {
    return (<div key={key} className={cx('comment')}>
      <CommentItem title={name} text={body} />
    </div>)
  }

  renderComments () {
    const {comments} = this.props

    if (comments.length === 0) {
      return null
    }

    return (<div className={cx('comments')}>
      <div className={cx('commentsHeader')}>{comments.length} Comments</div>
      {comments.map(this.renderComment.bind(this))}
    </div>)

  }

  renderPost () {
    const {users} = this.props
    const post = this.getPost()
    const user = users.byId[post.userId]

    return post && user && (<div className={cx('item')}>
      <Post
        id={post.id}
        title={post.title}
        text={post.body}
        userId={user.id}
        userName={user.name}
      />
    </div>)
  }

  render () {
    return (<div className={cx('container')}>
      {this.renderPost()}
      {this.renderComments()}
    </div>)
  }
}

Comments.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number
  })),
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string
  })),
  users: PropTypes.shape({
    byId: PropTypes.object
  }),
  actions: PropTypes.object,
  match: PropTypes.object
}

const mapStateToProps = (state) => ({
  posts: state.posts.list,
  users: state.users,
  comments: state.comments.list
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    fetchComments: actions.fetchComments.request
  }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))
