import React from 'react'

const RenderizaBackOuFront = () => {

    function escolhaDeRenderizacao(oQueRenderizar) {
        if (oQueRenderizar === "java") {
            return <h1>Backend</h1>
        } else {
            return <b>Frontend</b>
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