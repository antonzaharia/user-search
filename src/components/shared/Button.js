import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, icon, click }) {
  return (
    <button
      onClick={click}
      className="flex gap-2 px-3 py-2 border rounded border-gray-100 text-md text-gray-800 items-center"
    >
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
