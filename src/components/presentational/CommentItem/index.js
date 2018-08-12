import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

import styles from './CommentItem.scss'

const cx = classnames.bind(styles)

const CommentItem = ({title, text}) => (
  <div className={cx('item')}>
    <div className={cx('title')}>{title}</div>
    <div className={cx('text')}>{text}</div>
  </div>
)

CommentItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default CommentItem
