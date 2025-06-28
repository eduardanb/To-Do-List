import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <TodoForm />
        <Filter />
        <TodoList />
      </div>
    </>
  );
}

export default App;
