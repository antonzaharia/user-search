import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

function User({ user }) {
  return (
    <tr>
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
        <Avatar image={user.avatar} />
        <div className="pl-3">
          <div className="text-base font-semibold">{user.name}</div>
          <div className="font-normal">{user.email}</div>
        </div>
      </th>

      <td className="py-4 px-6 text-gray-900 whitespace-nowrap">{user.role}</td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User
