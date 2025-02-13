import React from 'react'
import Main from '../../pages/main/Main'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../../pages/about/About'
import OurServices from '../../pages/our-services/OurServices'
import Cars from '../../pages/cars/Cars'
import Li from '../../pages/details/li/Li'

function AppRouter() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Main/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/our-services" element={<OurServices/>}/>
      <Route path="/cars" element={<Cars/>}/>
      <Route path="/cars/li" element={<Li/>}/>
      <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
  )
}

export default AppRouter