import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { motion } from 'framer-motion';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
        className="todo-input"
      />
      <motion.button 
        type="submit" className="add-button"
        transition={{duration:0.5}}
        whileHover={{scale: 1.1}}
      >Adicionar</motion.button>
    </form>
  );
};

export default TodoForm;