// import Card from "../card/Card"
 
// function Home() {
//   return (
//     <>
//     <h1>Componente Home</h1>
//     <Card titulo="Bem vindo" texto="Até mais um dia" img="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNhdHN8ZW58MHx8MHx8fDA%3D"/>
//     <Card titulo="Bem vindo" texto="Até mais um dia" img="https://i.pinimg.com/originals/a6/1d/e1/a61de12663904e43b4a677d200e894e5.gif"/>
   
//     </>
   
//   )
// }
 
// export default Home


// src/home/Home.tsx
import { useState } from "react";
import Contador from "../contador/Contador";
import Tarefa from "../tarefa/Tarefa";

function Home() {
  const [telaAtiva, setTelaAtiva] = useState<'inicio' | 'contador' | 'tarefa'>('inicio');

  return (
    <>
      <h1>Boa pra nós!</h1>

      {telaAtiva === 'inicio' && (
        <>
          <button onClick={() => setTelaAtiva('contador')}>Contador</button>
          <button onClick={() => setTelaAtiva('tarefa')}>Tarefas</button>
        </>
      )}

      {telaAtiva === 'contador' && (
        <>
          <Contador />
          <button onClick={() => setTelaAtiva('inicio')}>Voltar</button>
        </>
      )}

      {telaAtiva === 'tarefa' && (
        <>
          <Tarefa />
          <button onClick={() => setTelaAtiva('inicio')}>Voltar</button>
        </>
      )}
    </>
  );
}

export default Home;
