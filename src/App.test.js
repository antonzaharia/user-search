import { render, screen } from '@testing-library/react';
import App from './App';

test('renders account users page title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Account users/i)
  expect(titleElement).toBeInTheDocument()
})

test('renders the first user from the JSON file', () => {
  render(<App />)
  const firstUserName = screen.getByText(/Geraldine Daniel/i)
  expect(firstUserName).toBeInTheDocument()
})
