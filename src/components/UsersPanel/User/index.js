import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import Role from './Role'
import { Checked } from '../../../contexts/checkedUsers'

import Button from '../../shared/Button'
import EditIcon from '../../shared/EditIcon'
import TrashIcon from '../../shared/TrashIcon'

function User({ user }) {
  const { setCheckedUsersIds, checkedUsersIds } = useContext(Checked)
  const [checked, setChecked] = useState(checkedUsersIds.includes(user.id))
  const [actions, setActions] = useState(false)

  useEffect(() => {
    if (checked) {
      setCheckedUsersIds([...checkedUsersIds, user.id])
    } else {
      const filteredUsers = checkedUsersIds.filter((uid) => uid !== user.id)
      setCheckedUsersIds(filteredUsers)
    }
  }, [checked])

  useEffect(() => {
    setChecked(checkedUsersIds.includes(user.id))
  }, [checkedUsersIds])

  const handleCheckboxChange = (event) => {
    setChecked(!checked)
  }
  const renderClass = () => {
    if (checked) {
      return 'bg-gray-50 rounded my-2 relative hover:cursor-pointer'
    } else {
      return 'bg-white rounded my-2 relative hover:cursor-pointer'
    }
  }
  const showAction = () => {
    if (actions) {
      return (
        <td className="absolute flex items-center gap-2 right-5 h-[75px]">
          <Button text="Edit" icon={<EditIcon />} />
          <Button icon={<TrashIcon />} />
        </td>
      )
    }
  }

  return (
    <tr className={renderClass()} onMouseEnter={() => setActions(true)} onMouseLeave={() => setActions(false)}>
      <td className={checked ? 'p-4 w-1 checked' : 'p-4 w-4'}>
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

      <th
        onClick={handleCheckboxChange}
        scope="row"
        className="flex items-center py-4 px-6 pl-0 text-gray-900 whitespace-nowrap"
      >
        <Avatar image={user.avatar} />
        <p className="pl-3 hidden md:block">
          <span className="text-left block text-gray-600 font-normal text-md">{user.name}</span>
          <span className="block font-normal text-gray-400 text-sm">{user.email}</span>
        </p>
      </th>

      <td onClick={handleCheckboxChange} className="py-4 px-6 text-gray-900">
        <Role text={user.role} />
      </td>
      {showAction()}
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
