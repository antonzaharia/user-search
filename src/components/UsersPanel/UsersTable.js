import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import User from './User'
import { Checked } from '../../contexts/checkedUsers'
import { Users } from '../../contexts/users'

import ArrowDownIcon from '../shared/ArrowDownIcon'

function UsersTable(props) {
  const { users } = useContext(Users)
  const { setCheckedUsersIds } = useContext(Checked)
  const [checkedAll, setCheckedAll] = useState(false)
  const renderUsers = () => props.users.map((user) => <User user={user} key={user.id} />)

  useEffect(() => {
    if (checkedAll) {
      let ids = users.map((user) => user.id)
      setCheckedUsersIds(ids)
    } else {
      setCheckedUsersIds([])
    }
  }, [checkedAll])

  return (
    <table className="w-full text-sm text-left text-gray-500 min-h-screen">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr className="bg-white">
          <th scope="col" className="p-4">
            <span className="">
              <input
                id="checkbox-all-search"
                onChange={() => setCheckedAll(!checkedAll)}
                type="checkbox"
                className="ml-1 w-5 h-5 text-blue-600 bg-white rounded border border-gray-300 focus:ring-0"
              />
            </span>
          </th>
          <th scope="col" className="normal-case py-3 px-6 pl-0 font-medium text-gray-400">
            User
          </th>
          <th scope="col" className="normal-case py-3 px-6 font-medium flex gap-1 text-gray-400">
            Permission
            <ArrowDownIcon />
          </th>
        </tr>
      </thead>
      <tbody>{renderUsers()}</tbody>
    </table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersTable
