import React from 'react'

import classnames from 'classnames/bind'

const styles = require('./Grid.scss')

const cx = classnames.bind(styles)

const Grid = () => (<div className={cx('container')}>
  <div className={cx('row')}>
    <div className={cx('col-1')}>1</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-2')}>2</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-3')}>3</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-4')}>4</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-5')}>5</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-6')}>6</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-7')}>7</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-8')}>8</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-9')}>9</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-10')}>10</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-11')}>11</div>
  </div>
  <div className={cx('row')}>
    <div className={cx('col-12')}>12</div>
  </div>
</div>)

export default Grid
