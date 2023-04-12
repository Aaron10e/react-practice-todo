'use client';
import Header from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './store/TodoStore';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

export default function Home() {
  return (
    <TodoProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={
            <div><TodoList /><AboutIconLink /></div>
            } />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}