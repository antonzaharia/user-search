import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

function UsersTable({ users }) {
  const renderUsers = () => users.map((user) => <User user={user} key={user.id} />)

  return (
    <table className="w-full text-sm text-left text-gray-500 min-h-screen">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr className="bg-white">
          <th scope="col" className="p-4">
            <span className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-white rounded border border-gray-300 focus:ring-0"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </span>
          </th>
          <th scope="col" className="normal-case py-3 px-6 font-medium">
            User
          </th>
          <th scope="col" className="normal-case py-3 px-6 font-medium">
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
