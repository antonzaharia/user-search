import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import User from './User'
import ArrowDownIcon from '../shared/ArrowDownIcon'

// Contexts
import { Checked } from '../../contexts/checkedUsers'
import { Users } from '../../contexts/users'

function UsersTable(props) {
  const { users } = useContext(Users)
  const { setCheckedUsersIds } = useContext(Checked)

  const [checkedAll, setCheckedAll] = useState(false)

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
                className="ml-1 checkbox"
              />
            </span>
          </th>
          <th scope="col" className="typography-1 pl-0">
            User
          </th>
          <th scope="col" className="typography-1 flex gap-1">
            Permission
            <ArrowDownIcon />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersTable
