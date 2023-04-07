import React, { useState, FC } from 'react';
import generateID from '../api/generateID';
import Image from 'next/image';
import styles from '../page.module.css';
import { TodoItem } from '../models/todo-item';
import { useTodoStore } from '../store/TodoStore';
import CloseIcon from './CloseIcon';

export const TodoList: FC = () => {
  const [goals, setGoals] = useState<TodoItem[]>([]);
  const [input, setInput] = useState('');
  const [shaking, setShaking] = useState(false);
  const { state, dispatch } = useTodoStore();

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
      const newGoal = { description: input, id: generateID(), isDone: false };
      setGoals([...goals, newGoal]);
      setInput('');
    }
  };

  const handleRemoveGoal = (id: any) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
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
            {goals.map((todo, index) => (
              <div key={todo.id}>
                <li>
                  {todo.description}
                  <div
                    className={styles.cancel}
                    onClick={() => handleRemoveGoal(todo.id)}
                  >
                  <CloseIcon />
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