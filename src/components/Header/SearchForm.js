import React, { useState, useContext, useCallback } from 'react'
import SearchIcon from '../shared/SearchIcon'

import { Users } from '../../contexts/users'
import { debounce } from '../../utils'

function SearchForm() {
  const { fetchUsers, setAllUsers } = useContext(Users)
  const [searchTerm, setSearchTerm] = useState('')

  // Filtering the collection using the term
  const filterBySearchTerm = (usersBulk, term) => {
    let regex = new RegExp(term, 'gi')
    return usersBulk.filter((user) => {
      return regex.test(user.name) || regex.test(user.email) || regex.test(user.role)
    })
  }

  // Setting the search term
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // Fetching all users and calling the search function
  const triggerSearch = async (term) => {
    const result = await fetchUsers()
    let newUsers = filterBySearchTerm(result, term)

    setAllUsers(newUsers)
  }

  // Debouncing the keyup event by half second
  const debounceSearch = useCallback(
    debounce((term) => triggerSearch(term), 500),
    []
  )

  // Preventing form being submitted
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-wrap justify-end">
      <div className="relative">
        <div className="input-icon">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyUp={() => debounceSearch(searchTerm)}
          className="search-input"
          placeholder="Search"
        />
      </div>
      <button className="primary-button">Connect users</button>
    </form>
  )
}

export default SearchForm
