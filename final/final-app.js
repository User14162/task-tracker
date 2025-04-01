// src/App.js

import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  // Save tasks to localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };
  
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  // Toggle a task's completed status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Get counts for summary
  const activeTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <div className="task-summary">
          <span>{activeTasks} active</span>
          <span>{completedTasks} completed</span>
          <span>{tasks.length} total</span>
        </div>
      </header>
      
      <main>
        <TaskForm onAddTask={addTask} />
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        <TaskList 
          tasks={filteredTasks} 
          onDeleteTask={deleteTask} 
          onToggleTask={toggleTask} 
        />
      </main>
      
      <footer className="app-footer">
        <p>React Task Tracker - Built with React</p>
      </footer>
    </div>
  );
}

export default App;
