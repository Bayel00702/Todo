import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todo, setTodo, status}) => {

    const delOneTodo = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id))
    };

    const setImportantOneTodo = (id) => {
        setTodo((prev) => prev.map((item) => {
            if (item.id === id){
                return {...item, isImportant: !item.isImportant}
            }
            return item
        }))
    };

    const setDoneOneTodo = (id) => {
        setTodo((prev) => prev.map((item) => {
            if (item.id === id){
                return {...item, isDone: !item.isDone}
            }
            return item
        }))
    };

    const setChangeOneTodo = (id,text) => {
        setTodo((prev) => prev.map((item) => {
            if (item.id === id){
                return {...item, text: text}
            }
            return item
        }))
    };

    return (
        <ul className="todo__list">

            {
                status === 'done' && todo.every(item => !item.isDone) ? <h3>Список выполненных задач пуст</h3> : status === 'important' && todo.every(item => !item.isImportant) ? <h3>Список избранных задач пуст</h3> : status === 'all' && !todo.length ? <h3>Список задач пуст</h3>: ''
            }


            {
                todo.filter((item) => {
                    if (status === 'done'){
                        return item.isDone
                    } else if (status === 'important'){
                        return item.isImportant
                    }
                    return item
                }).map((item) => (
                    <TodoItem setChangeOneTodo={setChangeOneTodo} setDoneOneTodo={setDoneOneTodo} setImportantOneTodo={setImportantOneTodo} delOneTodo={delOneTodo} item={item} key={item.id}/>
                ))
            }
        </ul>
    );
};

export default TodoList;