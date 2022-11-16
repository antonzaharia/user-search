import React, { useState, useContext } from 'react'
import { Users } from '../../contexts'

function SearchForm() {
  const { fetchUsers, setAllUsers } = useContext(Users)
  const [searchTerm, setSearchTerm] = useState('')

  const regex = new RegExp(searchTerm, 'gi')

  var filterBySearchTerm = (usersBulk) =>
    usersBulk.filter((user) => {
      return regex.test(user.name) || regex.test(user.email) || regex.test(user.role)
    })

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = async (event) => {
    const result = await fetchUsers()
    let newUsers = filterBySearchTerm(result)

    setAllUsers(newUsers)
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} onKeyUp={handleSearch} />
    </form>
  )
}

export default SearchForm
