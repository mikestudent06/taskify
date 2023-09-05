import React, { useState } from 'react';
import { Todo } from '../../model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash, faCheckCircle, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SingleTodo.scss';

library.add(faEdit, faTrash, faCheckCircle, faSave, faTimes);

type Props = {
  item: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ item, todos, settodos }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(item.todo);
  
  const handleComplete = (id: number) => {
    const updatedTodos = [...todos];
    settodos(updatedTodos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };

  const handleDelete = (id: number) => {
    const updatedTodos = [...todos];
    settodos(updatedTodos.filter((item) => item.id !== id));
  };
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    const editedTodoIndex = updatedTodos.findIndex((t) => t.id === item.id);
    if (editedTodoIndex !== -1) {
      updatedTodos[editedTodoIndex].todo = editedText;
      settodos(updatedTodos);
      setIsEditing(false);
    }
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(item.todo); // Reset the edited text to the original value
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key press
      handleSaveEdit(); // Call your save function when Enter is pressed
    }
  };
  
  return (
    <form className="SingleTodoContainer">
      {isEditing && !item.isDone ? (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} onKeyDown={handleKeyDown}/>
          <span>
            <FontAwesomeIcon icon={faSave} onClick={handleSaveEdit} /> {/* Save icon */}
            <FontAwesomeIcon icon={faTimes} onClick={handleCancelEdit} /> {/* Cancel icon */}
          </span>
        </>
      ) : (
        <>
          {!item.isDone ? (
            <li key={item.id}>
              {item.todo}
            </li>
          ) : (
            <s key={item.id}>
              {item.todo}
            </s>
          )}
          <span>
            <FontAwesomeIcon icon={faEdit} onClick={handleEdit} /> {/* Edit icon */}
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.id)} /> {/* Delete icon */}
            <FontAwesomeIcon icon={faCheckCircle} onClick={() => handleComplete(item.id)} /> {/* Complete icon */}
          </span>
        </>
      )}
    </form>
  );
};

export default SingleTodo;
