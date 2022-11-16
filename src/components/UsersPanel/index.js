import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'
import { Users } from '../../contexts'

const URL = 'https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json'
const PER_PAGE = 20

const UsersPanel = (props) => {
  const { users, visibleUsers, setUsers, setVisibleUsers } = useContext(Users)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch(URL)
      const result = await response.json()
      setUsers(result['users'])
      setVisibleUsers(result['users'].slice(0, PER_PAGE))
    }

    loadUsers()
    return () => {
      setLoading()
      setVisibleUsers(users.slice(0, PER_PAGE))
    }
  }, [])

  const showMore = () => {
    let newUsers = users.slice(visibleUsers.length, visibleUsers.length + PER_PAGE)
    setVisibleUsers([...visibleUsers, ...newUsers])
  }

  const renderTable = () => {
    if (loading || visibleUsers.length <= 0) {
      return 'Loading...'
    } else {
      return (
        <InfiniteTable
          totalCount={users.length}
          itemCount={visibleUsers.length}
          nextPage={showMore}
          perPage={PER_PAGE}
          pageCountResetter={false}
        >
          <UsersTable users={visibleUsers} />
        </InfiniteTable>
      )
    }
  }

  return renderTable()
}

export default UsersPanel
