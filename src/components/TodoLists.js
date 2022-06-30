import React from 'react';
import TodoList from './TodoList';
import './TodoList.css'

const TodoLists = ({todos, onDelete, onToggle}) => {
    return (
        <div className='lists'>
            {todos.map(todo=><TodoList onToggle={onToggle} todo={todo} key={todo.id} onDelete={onDelete}/>)} 
        </div>
    );
};

export default TodoLists;