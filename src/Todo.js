import React from 'react';

const Todo = (props) => {
    
    //TO DO USE EFFECT WITH DEPENDENCIES
    return(
        <div className="todo">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </div>
    );
}

export default Todo;