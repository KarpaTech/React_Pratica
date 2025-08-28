// import { useEffect, useState } from "react";

// function Tarefa() {

//   const [completed, setCompleted] = useState(false); // useState criou estado inicial, da variavel completed
//   const [tarefa, setTarefa] = useState(''); // variavel tarefa, 2 estados iniciados

//   useEffect(() => { // funçao especial que dispara funçao anonima de acordo com a alteraçao do estado

//     if(completed){
//       setTarefa('Boa!!!');
//     }else{
//       setTarefa('');
//     }

//   },[completed]);

//   return (                                      // inderizaçao condicional
//     <>
//     <h1>Componente Tarefa</h1>
//     <h3>{tarefa}</h3>                           
//     <button onClick={() => setCompleted(!completed)}>{completed ? 'Desfazer': 'Concluir'}</button>
//     </>
//   )
// }

// export default Tarefa


import { useState } from "react";

//Define um tipo pra tarefa
type TarefaItem = {
  texto: string;
  concluida: boolean;
};

function Tarefa() {
  const [input, setInput] = useState<string>('');
  const [tarefas, setTarefas] = useState<TarefaItem[]>([]); //Tipar corretamente o useState
  const [mensagem, setMensagem] = useState<string>('');

  const adicionarTarefa = () => {
    if (input.trim() !== '') {
      const novaTarefa: TarefaItem = {
        texto: input,
        concluida: false
      };
      setTarefas([...tarefas, novaTarefa]);
      setInput('');
      setMensagem('Tarefa adicionada com sucesso!');
    }
  };

  //Tipar os parâmetros das funções

  const alternarConclusao = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);

    if (novasTarefas[index].concluida) {
      setMensagem('Boa! Você concluiu uma tarefa.');
    } else {
      setMensagem('Tarefa desmarcada.');
    }
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
    setMensagem('Tarefa removida.');
  };

  return (
    <>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        placeholder="Insira uma tarefa..."
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} //Tipar o evento de input
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      {mensagem && <p style={{ color: 'GhostWhite' }}>{mensagem}</p>}

      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              color: tarefa.concluida ? 'lightblue' : 'white',
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              marginBottom: '8px',
            }}
          >
            {tarefa.texto}
            <button onClick={() => alternarConclusao(index)} style={{ marginLeft: '10px' }}>
              {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(index)} style={{ marginLeft: '5px' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tarefa;

