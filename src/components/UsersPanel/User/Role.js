import React from 'react'
import PropTypes from 'prop-types'

function Role({ text }) {
  // Formatting the role text as a CSS class
  const typeClass = () => text.toLowerCase().split('_').join('-')

  // Formatting the role text
  const formatText = () => {
    let spaced = text.toLowerCase().split('_').join(' ')
    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
  }

  return (
    <div className="flex">
      <div className={`py-1 px-2 rounded ${typeClass()}`}>{formatText()}</div>
    </div>
  )
}

Role.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Role
