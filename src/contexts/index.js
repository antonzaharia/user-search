import React, { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const PER_PAGE = 20

const Users = createContext({})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [usersCount, setUsersCount] = useState(0)
  const [visibleUsers, setVisibleUsers] = useState([])

  useEffect(() => {
    setUsersCount(users.length)
  }, [users])

  const updateUsers = (result) => {
    setUsers(result['users'])
    setVisibleUsers(result['users'].slice(0, PER_PAGE))
  }

  return (
    <Users.Provider
      value={{
        users,
        setUsers,
        visibleUsers,
        setVisibleUsers,
        updateUsers,
        usersCount,
        setUsersCount,
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
