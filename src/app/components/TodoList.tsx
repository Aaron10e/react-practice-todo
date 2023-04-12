import React, { useState, FC } from 'react';
import generateID from '../api/generateID';
import styles from '../page.module.css';
import { TodoItem } from '../models/todo-item';
import { useTodoStore } from '../store/TodoStore';
import CloseIcon from './CloseIcon';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'

export const TodoList: FC = () => {
  const [input, setInput] = useState('');
  const [shaking, setShaking] = useState(false);
  const { state, dispatch } = useTodoStore();
  const [editingTodo, setEditingTodo] = useState<{ id: string | null; value: string }>({
    id: null,
    value: '',
  });

  const handleAddGoal = (
    event:
      | React.MouseEventHandler<HTMLDivElement>
      | React.KeyboardEvent<HTMLInputElement>
      | any
  ) => {
    if (input.length < 1) {
      setShaking(true);
      setTimeout(() => {
        setShaking(false);
      }, 500);

      return;
    }
    if (event.type === 'click' || event.keyCode === 13) {
      const newTodo = { description: input, id: generateID(), isDone: false };
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setInput('');
    }
  };

  const handleUpdateTodo = (updatedTodo: TodoItem) => {
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodo });
  };
  
  const handleEditTodo = (id: string, value: string) => {
    setEditingTodo({ id, value });
  };

  const handleSaveEdit = (id: string, value: string) => {
    if (value.trim()) {
      dispatch({ type: 'UPDATE_TODO', payload: { id, description: value.trim() } });
    }
    setEditingTodo({ id: null, value: '' });
  };

  const handleRemoveGoal = (id: any) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <main className={styles.main}>        
        <div className={styles.description}>
          <div className={styles.card}>
            <div>
              <span>todo-next:</span>
            </div>
            <hr></hr>
            <div className={styles.code} style={{ maxWidth: '20vw' }}>
              <strong>welcome</strong> to the to-do list app. with some simple
              HMTL + CSS + TS we can be begin to create interactive web pages.
            </div>
          </div>
          <div className={styles.card}>
            <span>reminders:</span>
            <hr></hr>
              {state.todos.map((todo) => (
                <div key={todo.id}>
                  <li className={styles.todoItem}>
                    {editingTodo.id === todo.id ? (
                      <input
                        type="text"
                        value={editingTodo.value}
                        onChange={(e) => setEditingTodo({ ...editingTodo, value: e.target.value })}
                        onBlur={() => handleSaveEdit(todo.id, editingTodo.value)}
                        onKeyUp={(e) => {
                          if (e.key === 'Enter') {
                            handleSaveEdit(todo.id, editingTodo.value);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span onDoubleClick={() => handleEditTodo(todo.id, todo.description)}>
                        {todo.description}
                      </span>
                    )}
                    <div className={styles.itemButtons}>
                      <button onClick={() => handleUpdateTodo({ ...todo, isDone: !todo.isDone })}>
                        {todo.isDone ? (
                          <FaRegCheckCircle />
                        ) : (
                          <FaRegCircle />
                        )}
                      </button>
                      <div
                        className={styles.cancel}
                        onClick={() => handleRemoveGoal(todo.id)}
                        title="Remove goal"
                      >
                        <CloseIcon />
                      </div>                      
                    </div>
                  </li>
                </div>
              ))}
            <input
              id={shaking ? 'shake' : ''}
              value={input}
              onChange={handleInputChange}
              onKeyUp={handleAddGoal}
              type="text"
            />
            <div className={styles.button} onClick={handleAddGoal}>
              Add to list
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};