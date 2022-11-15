import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import { Users } from '../../contexts'
import InfiniteTable from '../InfiniteTable'
const PER_PAGE = 20

const UsersPanel = (props) => {
  const { users, visibleUsers, loadUsers, setVisibleUsers } = useContext(Users)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    if (loading) {
      return 'Loading...'
    } else {
      return (
        <InfiniteTable
          totalCount={users.length}
          itemCount={visibleUsers.length}
          nextPage={showMore}
          perPage={PER_PAGE}
          pageCountResetter={false}
          className="w-full text-sm text-left text-gray-500"
        >
          <UsersTable users={visibleUsers} />
        </InfiniteTable>
      )
    }
  }

  return renderTable()
}

export default UsersPanel
