import React from 'react'
import SearchForm from './SearchForm'

function Header() {
  return (
    <header className="flex items-center justify-between">
      <p className="text-xl font-medium">Account users</p>
      <SearchForm />
    </header>
  )
}

export default Header
