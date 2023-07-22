import { useState } from 'react';

//import Nome from './components/Nome'

function App(){
  //const [aluno, setAluno] = useState("João")
  //function hundleChangeName(nome){setAluno(nome);}




  return(
    <div>
    {/*<h1>Componente App</h1>
    <h2>Olá: {aluno}</h2> <button onClick={ () => hundleChangeName('Vinicius') }>Mudar nome</button> */}
    <h1>Cadatro</h1>
    <form>
      <label>Nome: </label><br/>
      <input placeholder='Digite seu nome:'></input><br/>

      <label>Email: </label><br/>
      <input placeholder='Digite seu email:'></input><br/>

      <label>Idade: </label><br/>
      <input placeholder='Digite sua idade:'></input><br/><br/>
      <button type='submit'>Registrar</button>
    </form>
    </div>
  );
}

export default App;

