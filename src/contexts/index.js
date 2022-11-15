import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

const URL = 'https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json'
const PER_PAGE = 20

const Users = createContext({})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [visibleUsers, setVisibleUsers] = useState([])

  const loadUsers = async () => {
    const response = await fetch(URL)
    const result = await response.json()
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
        loadUsers,
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
