import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'
import { Users } from '../../contexts/users'
import { Checked } from '../../contexts/checkedUsers'

import Button from '../shared/Button'
import EditIcon from '../shared/EditIcon'
import TrashIcon from '../shared/TrashIcon'

const UsersPanel = (props) => {
  const { checkedUsersIds } = useContext(Checked)
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
  const renderHeader = () => {
    if (checkedUsersIds.length > 0) {
      return (
        <div className="p-2 flex items-center gap-6">
          <p className="py-2 text-gray-700">
            {checkedUsersIds.length} {checkedUsersIds.length === 1 ? 'user' : 'users'} selected
          </p>
          <div className="flex items-center gap-2">
            <Button text="Edit" icon={<EditIcon />} />
            <Button text="Delete" icon={<TrashIcon />} />
          </div>
        </div>
      )
    } else {
      return (
        <div className="p-2 flex items-center gap-6">
          <p className="py-2">No users selected</p>
        </div>
      )
    }
  }

  return (
    <div className="bg-white rounded-lg p-4">
      {renderHeader()}
      {renderTable()}
    </div>
  )
}

export default UsersPanel
