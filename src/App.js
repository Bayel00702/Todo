
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoBottom from "./components/TodoBottom/TodoBottom";
import './style/style.scss'
import TodoBottomBtns from "./components/TodoBottom/TodoBottomBtns";


function App() {

  const [status, setStatus] = useState('all');

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todo') !== null){
      setTodo(JSON.parse(localStorage.getItem('todo')))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo]);



  return (
    <div className="App">
      <section className='todo'>
        <div className='todo__block'>
          <h1 className='todo__title'>TodoList</h1>
          <TodoAdd todo = {todo} setTodo={setTodo}/>

          {
            todo.length ?
                <>
                <TodoList status={status} todo={todo} setTodo={setTodo}/>
                <TodoBottom todo={todo} setTodo={setTodo}/>
                <TodoBottomBtns setStatus={setStatus}/>
                </>
                : <h2 className="todo__empty">The task list is empty!</h2>
          }
        </div>
      </section>
    </div>
  );
}

export default App;
