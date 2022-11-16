import React, { useState, useContext, useCallback } from 'react'
import { Users } from '../../contexts/users'
import { debounce } from '../../utils'
import SearchIcon from '../shared/SearchIcon'

function SearchForm() {
  const { fetchUsers, setAllUsers } = useContext(Users)
  const [searchTerm, setSearchTerm] = useState('')

  const filterBySearchTerm = (usersBulk, term) => {
    let regex = new RegExp(term, 'gi')
    return usersBulk.filter((user) => {
      return regex.test(user.name) || regex.test(user.email) || regex.test(user.role)
    })
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const triggerSearch = async (term) => {
    const result = await fetchUsers()
    let newUsers = filterBySearchTerm(result, term)

    setAllUsers(newUsers)
  }

  const debounceSearch = useCallback(
    debounce((term) => triggerSearch(term), 500),
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyUp={() => debounceSearch(searchTerm)}
          className="placeholder:text-gray-200 placeholder:text-md placeholder:leading-input block w-full p-3 pl-10 text-md text-gray-200 border border-gray-100 rounded"
          placeholder="Search"
        />
      </div>
      <button className="bg-blue-500 text-white rounded px-3 py-2 leading-input">Connect users</button>
    </form>
  )
}

export default SearchForm
