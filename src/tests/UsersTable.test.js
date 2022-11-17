import { render, screen } from '@testing-library/react'
import UsersTable from '../components/UsersPanel/UsersTable'
import { CheckedProvider } from '../contexts/checkedUsers'

test('renders the users table', () => {
  render(
    <CheckedProvider>
      <UsersTable users={[{ id: 1, name: 'Anton', email: 'test@test.com', avatar: 'https://noimage.com', role: 'ADMIN' }]} />
    </CheckedProvider>
  )
  const name = screen.getByText(/Anton/i)
  const email = screen.getByText(/test@test.com/i)
  const role = screen.getByText(/Admin/i)

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(role).toBeInTheDocument()
})
