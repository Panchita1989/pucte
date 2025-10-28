import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.jsx'
import Banner from './components/banner.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default App
