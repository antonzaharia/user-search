import React, { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const Checked = createContext({})

const CheckedProvider = ({ children }) => {
  const [checkedUsersIds, setCheckedUsersIds] = useState([])
  return (
    <Checked.Provider
      value={{
        checkedUsersIds,
        setCheckedUsersIds,
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
