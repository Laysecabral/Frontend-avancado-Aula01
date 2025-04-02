import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaDeRenderizacao(oQueRenderizar) {
        if (oQueRenderizar === "Java") {
            return <h1>Java</h1>
        } else {
            return <h1>React</h1>
        }
    }

  return (
    <div>
        {escolhaDeRenderizacao("Java")}
        {escolhaDeRenderizacao("React")}
    </div>

  )
}

export default RenderizaBackOuFront