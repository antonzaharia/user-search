import React, { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const Checked = createContext({})

const CheckedProvider = ({ children }) => {
  const [checkedUsers, setCheckedUsers] = useState([])
  return (
    <Checked.Provider
      value={{
        checkedUsers,
        setCheckedUsers,
      }}
    >
      {children}
    </Checked.Provider>
  )
}

CheckedProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export { Checked, CheckedProvider }
