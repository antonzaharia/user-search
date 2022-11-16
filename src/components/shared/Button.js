import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, icon, click }) {
  return (
    <button onClick={click}>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  click: PropTypes.func,
}
Button.defaultProps = {
  text: '',
  icon: null,
  click: () => {},
}

export default Button
