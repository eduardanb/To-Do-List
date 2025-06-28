import React from 'react';
import { motion } from 'framer-motion';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <motion.h1 
        transition={{ duration: 0.5 }}
        whileHover={{scale: 1.1}} >To-Do List</motion.h1>
        <TodoForm />
        <Filter />
        <TodoList />
      </div>
      <Footer /> 
    </>
  );
}

export default App;
