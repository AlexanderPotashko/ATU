import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import styles from './Post.scss'

const cx = classnames.bind(styles)

const Post = ({id, title, text, userId, userName}) => (
  <div data-id={id} className={cx('item')}>
    <div data-id={userId} className={cx('author')}>
      <span>{userName}</span>
    </div>
    <div className={cx('title')}>{title}</div>
    <div className={cx('text')}>{text}</div>
  </div>
)

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  userId: PropTypes.number,
  userName: PropTypes.string,
  userEmail: PropTypes.string
}

export default Post
