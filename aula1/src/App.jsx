import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Mutiplicacao from './components/Mutiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


const App = () => {
  return (
    <div>
      <Adicao num1={4} num2={6} />
      <Subtracao num1={4} num2={6} />
      <Mutiplicacao num1={10} num2={5} />
      <Divisao num1={10} num2={5} />
      <PrecisoEstudar nomeDaTecnologia = "Frontend - React"/>

      
    </div>
  )
}

export default App







