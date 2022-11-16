import Header from './components/Header'
import UsersPanel from './components/UsersPanel'
import { UsersProvider } from './contexts/users'
import { CheckedProvider } from './contexts/checkedUsers'

function App() {
  return (
    <CheckedProvider>
      <UsersProvider>
        <div className="App container mx-auto max-w-[1200px]">
          <Header />
          <UsersPanel />
        </div>
      </UsersProvider>
    </CheckedProvider>
  )
}

export default App
