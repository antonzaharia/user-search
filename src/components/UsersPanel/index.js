import React, { useEffect, useContext, useState } from 'react'

// Components
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'

// Contexts
import { Users } from '../../contexts/users'
import { Checked } from '../../contexts/checkedUsers'

// Icons
import Button from '../shared/Button'
import EditIcon from '../shared/EditIcon'
import TrashIcon from '../shared/TrashIcon'


const UsersPanel = (props) => {
  const { checkedUsersIds } = useContext(Checked)
  const { users, visibleUsers, setVisibleUsers, usersCount, fetchUsers, setAllUsers, perPage } = useContext(Users)

  useEffect(() => {
    // Loading the users on page load
    const loadUsers = async () => {
      const result = await fetchUsers()
      setAllUsers(result)
    }

    loadUsers()
  }, [])

  const showMore = () => {
    let newUsers = users.slice(visibleUsers.length, visibleUsers.length + perPage)
    setVisibleUsers([...visibleUsers, ...newUsers])
  }

  const renderTable = () => {
    // Hiding the table until we load users
    if (visibleUsers.length <= 0) {
      return 'Loading...'
    } else {
      // Loading first 20 users and initialize the infinite scroll
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
      // Render the checked count and action buttons
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
      // No users checked
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
