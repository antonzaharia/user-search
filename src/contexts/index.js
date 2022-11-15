import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

const URL = 'https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json'

const Users = createContext({})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  const loadUsers = async () => {
    const response = await fetch(URL)
    const result = await response.json()
    setUsers(result['users'])
  }

  return (
    <Users.Provider
      value={{
        users,
        setUsers,
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
