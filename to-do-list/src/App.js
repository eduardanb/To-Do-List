import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './App.css';

import { motion } from 'framer-motion';

function App() {
  return (
    <div className="app">
      <motion.h1 whileHover={{scale: 1.1}} >To Do List</motion.h1>
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;