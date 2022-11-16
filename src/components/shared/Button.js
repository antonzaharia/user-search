import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, icon, click }) {
  return (
    <button
      onClick={click}
      className="bg-white flex gap-2 px-2 h-9 border rounded border-gray-100 text-md text-gray-800 items-center"
    >
      <span>{icon}</span>
      {text.length > 0 && <span className="p-1">{text}</span>}
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
