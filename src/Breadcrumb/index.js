import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'

const Breadcrumb = props => {
  const { data, className, style } = props

  const getSeparator = index => {
    if (data.length - 1 !== index) {
      return <Icon.Small type="arrow-right" fill="text-disabled" />
    }
  }

  const renderList = data.map((item, index) => {
    return (
      <li key={index} className={styles.item}>
        {item.node}
        {getSeparator(index)}
      </li>
    )
  })

  return (
    <ul className={classnames(styles.breadcrumb, className)} style={style}>
      {renderList}
    </ul>
  )
}

Breadcrumb.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.node,
      /** Например, составная часть URL'а */
      key: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumb
