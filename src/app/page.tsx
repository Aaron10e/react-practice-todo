'use client';
import Header from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './store/TodoStore';

export default function Home() {
  return (
    <TodoProvider>
      <div>
        <Header />
        <TodoList />
      </div>
    </TodoProvider>
  );
}