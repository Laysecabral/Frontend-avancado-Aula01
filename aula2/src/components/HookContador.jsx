import React from 'react'
import { useState } from 'react'

const HookContado = () => {

    const [contador, setContador] = useState(1)

    function IncrementarContador () {
        setContador (contador +1)
    }

    function DecrementarContador () {
        setContador (contador -1)
    }
        
  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={IncrementarContador}>Incrementar contador</button><br></br>
        <h1>O contador está em: {contador+1}</h1>
        <button onClick={DecrementarContador}>Decrementar contador</button>
    </div>
  )
}

export default HookContado