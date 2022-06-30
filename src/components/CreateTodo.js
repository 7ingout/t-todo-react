import React from 'react';
import './TodoList.css'

const CreateTodo = ({onChange, text, onCreate}) => {
    return (
        <div>
            <header>
                <h2>to do list</h2>
                <div id='todo_box'>
                    <input type="text" value={text} name="newlist" onChange={onChange}/>
                    {/* (e)=>onChange(e.target.value) */}
                    <button onClick={onCreate}>+</button>
                </div>
            </header>
        </div>
    );
};

export default CreateTodo;