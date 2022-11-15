import React, { useEffect, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import { Users } from '../../contexts'

const UsersPanel = (props) => {
  const { users, loadUsers } = useContext(Users)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    loadUsers()
    return () => {
      setLoading(false)
    }
  })

  return <div>{!loading && <UsersTable users={users} />}</div>
}

export default UsersPanel
