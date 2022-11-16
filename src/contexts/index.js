import React, { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const URL = 'https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json'
const PER_PAGE = 20

const Users = createContext({})

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [usersCount, setUsersCount] = useState(0)
  const [visibleUsers, setVisibleUsers] = useState([])

  useEffect(() => {
    setUsersCount(users.length)
  }, [users])

  const fetchUsers = async () => {
    const response = await fetch(URL)
    const result = await response.json()
    return result['users']
  }

  const setAllUsers = (users) => {
    setUsers(users)
    setVisibleUsers(users.slice(0, PER_PAGE))
  }

  const perPage = PER_PAGE

  return (
    <Users.Provider
      value={{
        perPage,
        users,
        setUsers,
        visibleUsers,
        setVisibleUsers,
        usersCount,
        setUsersCount,
        fetchUsers,
        setAllUsers,
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
