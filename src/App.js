import React, {useState} from 'react';
import Todo from "./Todo"
import './App.css';

function App() {

//NEEDS: List of Todo's
//useState
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  
  setTodos([...todos, input]);
  setInput("");
}
  return (
    <div className="App">
      <h1>To-do App</h1>
      <form> 
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)}
          type="text"/>
        <button disabled={!input} onClick={handleSubmit}>Add Todo </button>
      </form>
      {todos.map((todo, index) => (
          <Todo 
            key={index}
            value={index}  
            title={todo}
          />
        ))    
      } 
    </div>
  );
}

export default App;
