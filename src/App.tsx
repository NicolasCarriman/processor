import './styles/app.sass'
import Sidebar from './components/sidebar'
import { ContextProvider } from './context/context.provider'
import MessageDisplay from './components/messageDisplay'

function App() {

  return (
    <ContextProvider>
      <div className='app-container'>
        <Sidebar />
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', height: '92%' }} id='message-display'>
        </main>
        <MessageDisplay />
      </div>
    </ContextProvider>
  )
}

export default App
