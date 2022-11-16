import React, { useState, useContext } from 'react'
import { Users } from '../../contexts'

const URL = 'https://raw.githubusercontent.com/klausapp/frontend-engineer-test-task/master/users.json'
const PER_PAGE = 20

function SearchForm() {
  const { setUsers, setVisibleUsers } = useContext(Users)
  const [searchTerm, setSearchTerm] = useState('')

  const regex = new RegExp(searchTerm, 'gi')

  var search = (usersBulk) =>
    usersBulk['users'].filter((user) => {
      return regex.test(user.name) || regex.test(user.email) || regex.test(user.role)
    })

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = async (event) => {
    const response = await fetch(URL)
    const result = await response.json()

    let newUsers = search(result)

    setUsers(newUsers)
    setVisibleUsers(newUsers.slice(0, PER_PAGE))
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} onKeyUp={handleSearch} />
    </form>
  )
}

export default SearchForm
