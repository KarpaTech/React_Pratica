import { useEffect, useState } from "react";

function Tarefa() {

  const [completed, setCompleted] = useState(false); // useState criou estado inicial, da variavel completed
  const [tarefa, setTarefa] = useState(''); // variavel tarefa, 2 estados iniciados

  useEffect(() => { // funçao especial que dispara funçao anonima de acordo com a alteraçao do estado

    if(completed){
      setTarefa('Boa!!!');
    }else{
      setTarefa('');
    }

  },[completed]);

  return (                                      // inderizaçao condicional
    <>
    <h1>Componente Tarefa</h1>
    <h3>{tarefa}</h3>                           
    <button onClick={() => setCompleted(!completed)}>{completed ? 'Desfazer': 'Concluir'}</button>
    </>
  )
}

export default Tarefa