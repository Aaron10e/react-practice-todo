import { todoReducer, TodoState } from '../store/ToDoReducer';
import React, { createContext, useContext, useReducer } from 'react';

const initialState: TodoState = {
  todos: [],
};

type TodoContextType = {
  state: TodoState;
  dispatch: React.Dispatch<any>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoStore = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error('useTodoStore must be used within a TodoProvider');
  }

  return context;
};


