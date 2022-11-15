import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'

function User({ user }) {
  return (
    <tr>
      <td className="p-4 w-4">
        <p className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
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
