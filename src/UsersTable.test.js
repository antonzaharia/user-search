import { render, screen } from '@testing-library/react'
import UsersTable from './components/UsersPanel/UsersTable'

test('renders the users table', () => {
  render(
    <UsersTable users={[{ id: 1, name: 'Anton', email: 'test@test.com', avatar: 'https://noimage.com', role: 'ADMIN' }]} />
  )
  const name = screen.getByText(/Anton/i)
  const email = screen.getByText(/test@test.com/i)
  const role = screen.getByText(/Admin/i)
  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(role).toBeInTheDocument()
})
