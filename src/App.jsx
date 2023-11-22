import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-screen flex items-center justify-center text-4xl text-blue-700'>
       Hello World!
     </div>
    </>
  )
}

export default App
