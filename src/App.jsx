import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FrontPage from './components/FrontPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <FrontPage/>
     </div>
  )
}

export default App
