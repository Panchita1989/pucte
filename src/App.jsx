import { useEffect } from 'react'
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header.jsx'
import Banner from './components/banner.jsx'
import Footer from './components/footer.jsx'
import Rooms from './components/rooms.jsx'
import Bacalar from './components/bacalar.jsx'
import Experiences from './components/experiences.jsx'
import Location from './components/location.jsx'
import Contact from './components/contact.jsx'



function App() {

  const {pathname} = useLocation()

  useLayoutEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]);
  
   useEffect(() => {
    if (pathname === "/") {
      document.body.style.backgroundColor = "#2e3842"; // dunkelgrau (Landing)
    } else {
      document.body.style.backgroundColor = "#d9d9d9"; // hellgrau (andere Seiten)
    }
  }, [pathname]);


  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element= {<Banner />} />
        <Route path='/rooms' element={<Rooms />}/>
        <Route path='/bacalar' element={<Bacalar />}/>
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </>
  )
}

export default App
