import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { Checked } from '../../../contexts/checkedUsers'

function User({ user }) {
  const { checkedUsersIds, setCheckedUsersIds } = useContext(Checked)
  const [checked, setChecked] = useState(checkedUsersIds.includes(user.id))

  useEffect(() => {
    if (checked) {
      setCheckedUsersIds([...checkedUsersIds, user.id])
    } else {
      const filteredUsers = checkedUsersIds.filter((uid) => uid !== user.id)
      setCheckedUsersIds(filteredUsers)
    }
  }, [checked])

  const handleCheckboxChange = (event) => {
    setChecked(!checked)
  }
  const renderClass = () => {
    if (checked) {
      return 'rounded bg-gray-50 my-2'
    } else {
      return 'rounded bg-white my-2'
    }
  }

  return (
    <tr class={renderClass()}>
      <td className={checked ? 'p-4 w-4 checked' : 'p-4 w-4'}>
        <p className="flex items-center">
          <input
            id="checkbox-table-search-1"
            onChange={handleCheckboxChange}
            checked={checked}
            type="checkbox"
            className="w-5 h-5 text-blue-600 bg-white rounded border border-gray-300 focus:ring-0"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </p>
      </td>

      <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
        <Avatar image={user.avatar} />
        <p className="pl-3">
          <span className="text-left block text-base font-semibold">{user.name}</span>
          <span className="block font-normal">{user.email}</span>
        </p>
      </th>

      <td className="py-4 px-6 text-gray-900 whitespace-nowrap">{user.role}</td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
