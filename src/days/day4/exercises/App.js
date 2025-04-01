// src/days/day4/exercises/App.js

import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import './styles.css';

/*
 * CHALLENGE 1: Implement localStorage persistence
 * 
 * TODO: Add localStorage to persist tasks between page refreshes
 * The component should:
 * 1. Use useEffect to load tasks from localStorage when the app starts
 * 2. Use useEffect to save tasks to localStorage whenever tasks change
 */

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // TODO: Add useEffect to load tasks from localStorage on component mount
  
  // TODO: Add useEffect to save tasks to localStorage when tasks change
  
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
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
  
  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={deleteTask} 
        onToggleTask={toggleTask} 
      />
    </div>
  );
}

export default App;
