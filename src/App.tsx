import { CountProvider } from './Contexts/Count'
import { CountLabel } from './Components/CountLabel'
import { PlusButton } from './Components/PlusButton'

function App() {
  return (
    <CountProvider>
      <CountLabel />
      <PlusButton />
    </CountProvider>
  )
}

export default App
