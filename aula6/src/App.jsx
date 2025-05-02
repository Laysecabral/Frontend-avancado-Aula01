import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicial from './pags/Inicial'
import Contato from './pags/Contato'
import Noticias from './pags/Noticias'
import Dpolgpd from './pags/Dpolgpd'
import Faculdade from './pags/Faculdade'
import Navbar from './componets/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Inicial />}/> 
      <Route path='/contato' element={<Contato />}/> 
      <Route path='/noticias' element={<Noticias />}/> 
      <Route path='/dpo-lgpd' element={<Dpolgpd />}/> 
      <Route path='/a-faculdade' element={<Faculdade />}/> 

    </Routes>
    </BrowserRouter>
   

    
  )
}

export default App
