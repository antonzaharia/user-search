import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import blankProfile from '../../../blank_profile.png'

function Avatar({ image }) {
  const [imageSrc, setImageSrc] = useState(blankProfile)
  useEffect(() => {
    const img = new Image()
    img.src = image

    if (img.complete) {
      setImageSrc(image)
    } else {
      img.onload = () => {
        setImageSrc(image)
      }
      img.onerror = () => {}
    }
  }, [image])

  return <img className="w-10 h-10 rounded-full" src={imageSrc} alt="User profile pic" />
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Avatar
