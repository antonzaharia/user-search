import React from 'react'
import User from './User'
import PropTypes from 'prop-types'

function UsersTable({ users }) {
  const renderUsers = () => users.map((user) => <User user={user} key={user.id} />)

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="p-4">
            <span className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </span>
          </th>
          <th scope="col" className="py-3 px-6">
            User
          </th>
          <th scope="col" className="py-3 px-6">
            Permission
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
