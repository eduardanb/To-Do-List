export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});