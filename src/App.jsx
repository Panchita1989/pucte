import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.jsx'
import Banner from './components/banner.jsx'
import Footer from './components/footer.jsx'
import ScrollToButton from './components/scrollToButton.jsx'
import Rooms from './components/rooms.jsx'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <ScrollToButton />
      <Footer />
      <Rooms />
    </>
  )
}

export default App
