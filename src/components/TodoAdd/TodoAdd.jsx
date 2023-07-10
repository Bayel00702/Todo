import React from 'react';
import {v4 as uuidv4} from "uuid";

const TodoAdd = ({todo, setTodo}) => {

    const addTodo = async (e) => {
        let text = e.target[0].value;

        e.preventDefault();

        let isHas = todo.some(item => item.text === text);

        if (!isHas){
            await setTodo((prev) => [...prev, {
                id: uuidv4(),
                text: text,
                isImportant: false,
                isDone: false,
                change: false
            }]);
        } else {
            alert('Such a task already exists')
        }


        e.target[0].value = ''
    };

    return (
        <form onSubmit={addTodo} className="todo__form">
            <input placeholder="Add task" required type="text" className="todo__form-input"/>
            <button className="todo__form-btn" type="submit">Add todo</button>
        </form>
    );
};

export default TodoAdd;