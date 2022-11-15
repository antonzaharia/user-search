import Header from './components/Header'
import { UsersProvider } from './contexts'
import UsersPanel from './components/UsersPanel'

function App() {
  return (
    <UsersProvider>
      <div className="App container mx-auto max-w-[1200px]">
        <Header />
        <UsersPanel />
      </div>
    </UsersProvider>
  )
}

export default App
