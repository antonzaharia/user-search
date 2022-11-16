import React, { useState, useContext, useCallback } from 'react'
import { Users } from '../../contexts'
import { debounce } from '../../utils'

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
    console.log(term)
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} onKeyUp={() => debounceSearch(searchTerm)} />
      <button>Connect users</button>
    </form>
  )
}

export default SearchForm
