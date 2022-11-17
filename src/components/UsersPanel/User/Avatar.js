import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import blankProfile from '../../../blank_profile.png'

function Avatar({ image }) {
  const [imageSrc, setImageSrc] = useState(blankProfile)
  useEffect(() => {
    // Handle image load errors and add a blank profile picture
    const img = new Image()
    img.src = image

    img.onload = () => {
      setImageSrc(image)
    }
  }, [image])

  return <img className="w-10 h-10 rounded-full object-cover" src={imageSrc} alt="User profile pic" />
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Avatar
