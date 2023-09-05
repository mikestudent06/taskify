
import { Todo } from '../../model';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.scss";

interface Props {
    todos: Todo[],
    settodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props>= ({todos, settodos}) => {
  
  return (
    <div className='todo-list-container'>
    <h2>Todo List:</h2>
    <ul>
      {todos
      .filter((item) => item.todo !== "") // Filter out items with empty todo
      .map((item) => ( 
        <SingleTodo item={item} key={item.id} todos={todos} settodos={settodos}/>
        )) // Render list items for non-empty todos
    }
    </ul>
    </div>
  );
}

export default TodoList;
