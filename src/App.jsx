import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Banner from './components/banner.jsx'
import Footer from './components/footer.jsx'
import Rooms from './components/rooms.jsx'
import Bacalar from './components/bacalar.jsx'
import Experiences from './components/experiences.jsx'
import Location from './components/location.jsx'
import Contact from './components/contact.jsx'



function App() {

  return (
    <>
      
      
      <Routes>
        <Route path='/rooms' element={<Rooms />}/>
        <Route path='/bacalar' element={<Bacalar />}/>
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Banner />
      <Footer />
    </>
  )
}

export default App
