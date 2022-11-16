import Header from './components/Header'
import UsersPanel from './components/UsersPanel'
import { UsersProvider } from './contexts'

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
