import React from 'react';

//rsc
const TodoList = ({todo, onDelete, onToggle}) => {
    return (
        <div id="todo">
             <span id="todotodo" className={todo.isDone ? 'isDone' : ""} 
             onClick ={()=> onToggle(todo.id)}>
                {todo.todotext}
                </span> 
            <button id="delBtn" onClick={()=>{onDelete(todo.id)}}>X</button>
        </div>
        // className={todo.isDone && 'isDone'} 
    );
};

export default TodoList;
