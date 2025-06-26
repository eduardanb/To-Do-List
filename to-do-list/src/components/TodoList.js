import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <p className="empty-message">Nenhuma tarefa encontrada</p>
      )}
    </div>
  );
};

export default TodoList;