import React, {useState} from 'react';

const TodoItem = ({item, delOneTodo,setImportantOneTodo,setDoneOneTodo,setChangeOneTodo}) => {

    const [change, setChange] =useState(false);
    const [changeText, setChangeText] = useState(item.text || '');

    const changeFunc = (e) => {
        if (e.target.textContent === 'Save') {
            setChangeOneTodo(item.id, changeText)
        }
            setChange(prev => !prev)
    };

    return (
        <li className="todo__item">
            <label htmlFor="" className="todo__item-label">
                <input checked={item.isDone} onChange={() => setDoneOneTodo(item.id)} className="todo__input" type="checkbox"/>

                {
                    change ? <input type="text" value={changeText}  onChange={(e) => setChangeText(e.target.value)} className="todo__item-input"/> : <p style={{color: item.isDone ? 'blue' : 'black'}} className="todo__text">{item.text}</p>
                }
            </label>

            <div className="todo__item-btns">
                <button style={{background: item.isImportant ? 'gold' : 'buttonFace' }} onClick={() => setImportantOneTodo(item.id)} className="todo__item-btn">Important</button>
                <button onClick={changeFunc} className="todo__item-btn">{
                    change ? 'Save' : 'Change'
                }</button>
                <button onClick={() => delOneTodo(item.id)} type="button" className="todo__item-btn">Delete</button>

            </div>
        </li>
    );
};

export default TodoItem;