import { TodoItem } from '../models/todo-item';

export interface TodoState {
  todos: TodoItem[];
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: TodoItem }
  | { type: 'UPDATE_TODO'; payload: TodoItem }
  | { type: 'DELETE_TODO'; payload: string };

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
};
