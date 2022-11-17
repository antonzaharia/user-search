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
    // Update the checked collection on checked value change
    if (checked) {
      setCheckedUsersIds([...checkedUsersIds, user.id])
    } else {
      const filteredUsers = checkedUsersIds.filter((uid) => uid !== user.id)
      setCheckedUsersIds(filteredUsers)
    }
  }, [checked])

  useEffect(() => {
    // Update the checked value on checked collection change
    // Used for check all/uncheck all trigger
    setChecked(checkedUsersIds.includes(user.id))
  }, [checkedUsersIds])

  const handleCheckboxChange = (event) => {
    setChecked(!checked)
  }

  const showAction = () => {
    // Show actions buttons on row hover
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
    <tr
      className={`table-row ${checked ? 'bg-gray-50' : 'bg-white'}`}
      onMouseEnter={() => setActions(true)}
      onMouseLeave={() => setActions(false)}
    >
      {/* User checkbox */}
      <td className={`p-4 w-1 ${checked ? 'checked' : ''}`}>
        <p className="flex items-center">
          <input
            id="checkbox-table-search-1"
            onChange={handleCheckboxChange}
            checked={checked}
            type="checkbox"
            className="checkbox"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </p>
      </td>

      {/* User details */}
      <th
        onClick={handleCheckboxChange}
        scope="row"
        className="flex items-center py-4 px-6 pl-0 text-gray-900 whitespace-nowrap"
      >
        <Avatar image={user.avatar} />
        <p className="pl-3 hidden md:block">
          <span className="typography-2">{user.name}</span>
          <span className="mute-text">{user.email}</span>
        </p>
      </th>

      {/* User role */}
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
