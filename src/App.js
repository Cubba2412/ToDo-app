import React, { useState, useEffect } from 'react';
import Todo from "./Todo"
import './App.css';
import db from './firebase';

function App() {
  //NEEDS: List of Todo's
  //useState
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    //This code fires off whenever the "snapshot" / data changes.
    db.collection('todos').onSnapshot(snapshot => { //For the collection "todos" take a snapshot of the data currently in there
      setTodos(snapshot.docs.map(doc => doc.data().title)) // set the todos to an array of objects, from the firebase collection documents, in this case a string in the "title" field.
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      title: input,
    });
    setInput("");
  }
   // Delete in firebase by Id: 
  // db.collection('todos').doc('id').delete();
  return (
    <div className="App">
      <h1>To-do App</h1>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text" />
        <button disabled={!input} onClick={addTodo}>Add Todo </button>
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
