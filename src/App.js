import { useState, useEffect } from 'react';

//import Nome from './components/Nome'

function App(){
  //const [aluno, setAluno] = useState("João")
  //function hundleChangeName(nome){setAluno(nome);}
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Estudar React JS'
    ]);  

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('chaveTarefa');
    
        if (tarefasStorage) {
          setTarefas(JSON.parse(tarefasStorage));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('chaveTarefa', JSON.stringify(tarefas));
      }, [tarefas]);
    //@tarefa === key  //JSON stringify transforma lista em string
    //chama o que ta no array e executa a function 
    //quando carrega o site chama o useEffect(array vazia)



    function handleRegister(e){
        e.preventDefault();//para nao atualizar a pagina 
    
      setTarefas([...tarefas, input]);
      setInput(''); 
    }
  return(
    <div>
    {/*<h1>Componente App</h1>
    <h2>Olá: {aluno}</h2> <button onClick={ () => hundleChangeName('Vinicius') }>Mudar nome</button> */}
    <h1>Cadatro de tarefa</h1>
    <form onSubmit={handleRegister}>
      <label>Nome da tarefa: </label><br/>
      <input placeholder='Digite uma tarefa:'
      value={input} 
      onChange={ (e) => setInput(e.target.value)}
      />
      <br/><br/>

      <button type='submit'>Registrar</button>
    </form>

    <br/><br/>
    
    <ul>
        {tarefas.map (tarefa => (
            <li key={tarefa}> { tarefa } </li>
        ))}
    </ul>
    </div>
  );
}

export default App;

