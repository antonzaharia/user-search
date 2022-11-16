import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'
import { Users } from '../../contexts'


const PER_PAGE = 20

const UsersPanel = (props) => {
  const { users, visibleUsers, setUsers, setVisibleUsers, usersCount, fetchUsers } = useContext(Users)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      const result = await fetchUsers()
      setUsers(result)
      setVisibleUsers(result.slice(0, PER_PAGE))
    }

    loadUsers()
    return () => {
      setLoading(false)
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
