import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

const Users = createContext({})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [visibleUsers, setVisibleUsers] = useState([])

  return (
    <Users.Provider
      value={{
        users,
        setUsers,
        visibleUsers,
        setVisibleUsers,
      }}
    >
      {children}
    </Users.Provider>
  )
}

UsersProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export { Users, UsersProvider }
