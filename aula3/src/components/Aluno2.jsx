import React from 'react'

const Aluno2 = ({nome, email, curso, media}) => {

    const status = media >= 7 ? "APROVADO(A)" : "RESPROVADO(A)"; 

  return (
    <div>

        <p>Nome: {nome}</p>
        <p>Emeil: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media} </p>
        <p>Status: {media >= 7 ? <strong>Aprovado</strong> : <strong>Reprovado</strong>} </p>
        <p>---------------------</p>

    </div>
  )
}

export default Aluno2