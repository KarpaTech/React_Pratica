import { useState } from "react"

function Contador() {
  const[valor, setValor] = useState(0);

  function handleClick(){
    setValor(valor + 1)
  }

  return (
  <>
    <h1>Componente Contador</h1>
    <p>O valor inicial é: {valor}</p>
    <button onClick={handleClick}>Adicionar 1</button>
  </>
  )
}

export default Contador