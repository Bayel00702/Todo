import React from 'react';

const TodoBottom = ({todo, setTodo}) => {
    const delAllDoneTodo = () => {
        setTodo(prev => prev.filter(item => !item.isDone))
    };
    return (
        <div className="todo__tasks">
            <div style={{background: todo.every(item => item.isDone) ? 'red' : 'none'}} className="todo__tasks-tsk">
                {todo.filter(item => item.isDone).length} of {todo.length} task done
            </div>

            <button onClick={delAllDoneTodo} className="todo__tasks-btn">Remove checked</button>
        </div>
    );
};

export default TodoBottom;