import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../redux/actions';
import { motion } from 'framer-motion';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      dispatch(editTodo(todo.id, editText));
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <motion.button
            type="submit" className="save-button"
            transition={{duration:0.5}}
            whileHover={{scale: 1.1}}           
           >Salvar</motion.button>
        </form>
      ) : (
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}
      
      <motion.button 
        onClick={() => dispatch(deleteTodo(todo.id))} 
        className="delete-button"
        transition={{duration:0.5}}
        whileHover={{scale: 1.1}}
      >
        Excluir
      </motion.button>
    </div>
  );
};

export default TodoItem;