import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'

const Checkbox = props => {
  const {
    defaultChecked,
    fill,
    disabled,
    id,
    name,
    required,
    tabIndex,
    checked,
    onBlur,
    onChange,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    children,
    className,
  } = props

  const [check, setCheck] = useState(defaultChecked || false)

  useEffect(() => {
    if (!defaultChecked) {
      setCheck(checked)
    }
  }, [checked])

  const handleChange = e => {
    if (checked === undefined) {
      setCheck(e.target.checked)
    }
    onChange(e)
  }

  return (
    <label className={className}>
      <input
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        required={required}
        tabIndex={tabIndex}
        checked={checked}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classnames(styles.checkbox)}
        id={id}
        type="checkbox"
      />
      <span
        className={classnames(
          styles.label,
          styles.checkmark,
          disabled && classes[`bg-input-disabled-bg-before`],
          check && classes[`${fill}-bg-before`]
        )}>
        {children}
      </span>
    </label>
  )
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  fill: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  checked: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  fill: 'primary',
  onChange: e => {},
}

export default Checkbox
