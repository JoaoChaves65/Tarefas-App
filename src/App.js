import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000";

function App() {
  const [title, setTile] = useState("")
  const [time, setTime] = useState("")
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <div className="tarefa-header">
        <h1>Tarefas React</h1>
      </div>
      <div className="form-tarefa">
        <p>Formulário</p>
      </div>
      <div className="list-tarefa">
        <p>Lista</p>
      </div>
      
    </div>
  );
}

export default App;
