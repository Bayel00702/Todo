import React from 'react';

const TodoBottomBtns = ({setStatus}) => {
    return (
        <div className="todo__btns">
            <button onClick={() => setStatus('All')} className="todo__btns-btn" style={{background: "cyan"}}>All</button>
            <button onClick={() => setStatus('done')} className="todo__btns-btn" style={{background: "lawngreen"}}>Done</button>
            <button onClick={() => setStatus('important')} className="todo__btns-btn" style={{background: "gold"}}>Important</button>
        </div>
    );
};

export default TodoBottomBtns;