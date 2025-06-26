import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, SET_FILTER } from './actions';

const initialState = {
  todos: [],
  filter: 'all'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
      
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload 
            ? { ...todo, completed: !todo.completed } 
            : todo
        )
      };
      
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id 
            ? { ...todo, text: action.payload.newText } 
            : todo
        )
      };
      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
      
    default:
      return state;
  }
};

export default todoReducer;