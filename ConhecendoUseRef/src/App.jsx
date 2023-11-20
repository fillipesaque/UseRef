import { useRef, useState } from "react"
import RefExemple from "./RefExemple"



function App() {
  
  let variable = 0  /* variavel comun */
  const [state , setState] = useState(0) /* hook usestate */
  const ref = useRef(0) /* hook useRef Modifica o valor na memoria mas nao renderiza na tela */

  const showValue = () => {
    alert(`
      variable: ${variable}
      ref: ${ref.current /*para referenciar o valor do ref e sempre ref.current  */}
      state: ${state}
    `)
  }

  return (
    <>
      <div>
        <h2>Ref Exemple</h2>
        <RefExemple/>
        <hr />
        <h2>Conhecendo o UseRef</h2>
        <hr />
        <p>Variable: {variable}</p>
        <p>Ref: {ref.current}</p>
        <p>State: {state}</p>

        <button onClick={() => variable++}>Aumentar Variable</button>
        <button onClick={() => ref.current++}>Aumentar Ref</button> {/* exibe valor atual do ref */}
        <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
        <button onClick={showValue}>Exibir Valores</button>

      </div>
    </>
  )
}

export default App
