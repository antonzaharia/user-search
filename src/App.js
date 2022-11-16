import Header from './components/Header'
import UsersPanel from './components/UsersPanel'
import { UsersProvider } from './contexts/users'
import { CheckedProvider } from './contexts/checkedUsers'

function App() {
  return (
    <CheckedProvider>
      <UsersProvider>
        <div className="p-8 flex flex-col gap-5">
          <Header />
          <UsersPanel />
        </div>
      </UsersProvider>
    </CheckedProvider>
  )
}

export default App
