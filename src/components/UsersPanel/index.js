import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import InfiniteTable from '../InfiniteTable'
import { Users } from '../../contexts/users'
import { Checked } from '../../contexts/checkedUsers'

import Button from '../shared/Button'
import EditIcon from '../shared/EditIcon'

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

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="p-2 flex gap-2">
        {checkedUsersIds.length > 0 && <p className>{checkedUsersIds.length} users selected</p>}
        <Button icon={<EditIcon />} />
      </div>
      {renderTable()}
    </div>
  )
}

export default UsersPanel
