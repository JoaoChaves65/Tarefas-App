import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    const tarefa = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    // Envio pra api
    console.log(tarefa)

    setTitle("");
    setTime("");
  }

  return (
    <div className="App">
      <div className="tarefa-header">
        <h1>Tarefas React</h1>
      </div>
      <div className="form-tarefa">
        <h2>Insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input 
              type="text" 
              name="title" 
              placeholder="Título da tarefa" 
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração:</label>
            <input 
              type="text" 
              name="time" 
              placeholder="Tempo estimado (em horas)" 
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa"/>
        </form>
      </div>
      <div className="list-tarefa">
        <h2>Lista de tarefas:</h2>
        {tarefas.length === 0 && <p>Não há tarefas!</p>}
      </div>
      
    </div>
  );
}

export default App;
