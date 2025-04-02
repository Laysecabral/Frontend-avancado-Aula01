import React from 'react'
import Aluno2 from './components/Aluno2'

const App = () => {
  return (
    <div>
      {
        [
          {nome: "João", email: "joao@gmail.com", curso: "Sistemas para Internet", media: 7},
          {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas de Informação", media: 10},
          {nome: "Kellyanne", email: "kellyane@gmail.com", curso: "Publicidade", media: 4}
        ].map((aluno2) =>
          <Aluno2 nome={aluno2.nome} email={aluno2.email} curso={aluno2.curso} media={aluno2.media} />
        )
      }
    </div>
  )
}

export default App