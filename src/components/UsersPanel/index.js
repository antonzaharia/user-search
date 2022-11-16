import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'
import { Users } from '../../contexts'

const UsersPanel = (props) => {
  const { users, visibleUsers, setVisibleUsers, usersCount, fetchUsers, setAllUsers, perPage } = useContext(Users)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      const result = await fetchUsers()

      setAllUsers(result)
    }

    loadUsers()
    return () => {
      setLoading(false)
    }
  }, [])

  const showMore = () => {
    let newUsers = users.slice(visibleUsers.length, visibleUsers.length + perPage)
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
          perPage={perPage}
          pageCountResetter={usersCount}
        >
          <UsersTable users={visibleUsers} />
        </InfiniteTable>
      )
    }
  }

  return (
    <div>
      <div>{usersCount}</div>
      {renderTable()}
    </div>
  )
}

export default UsersPanel
