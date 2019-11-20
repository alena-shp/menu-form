import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'

const Button = props => {
  const {
    className,
    children,
    typePrimary,
    typeSecondary,
    ...restProps
  } = props
  const componentClass = classNames('button', className, {
    'button--primary': typePrimary,
    'button--secondary': typeSecondary
  })
  return (
    <button className={componentClass} {...restProps}>
      {children}
    </button>
  )
}

Button.propTypes = {
  typePrimary: PropTypes.bool,
  typeSecondary: PropTypes.bool
}

Button.defaultProps = {
  typePrimary: false,
  typeSecondary: false
}

export default Button
