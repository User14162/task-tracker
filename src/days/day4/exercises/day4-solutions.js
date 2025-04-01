// src/days/day4/solutions/App.js
import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import './styles.css';

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

// src/days/day4/solutions/TaskFilter.js
function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filter">
      <button 
        className={currentFilter === 'all' ? 'active' : ''} 
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''} 
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''} 
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;

// src/days/day4/solutions/styles.css
/* Base styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

/* App container */
.app {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Headings */
h1, h2 {
  margin-top: 0;
  color: #2c3e50;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Task Form */
.task-form {
  display: flex;
  margin-bottom: 1.5rem;
}

.task-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.task-form button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.task-form button:hover {
  background-color: #2980b9;
}

/* Task Filter */
.task-filter {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 8px;
}

.task-filter button {
  padding: 8px 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.task-filter button:hover {
  background-color: #f8f8f8;
  border-color: #bbb;
}

.task-filter button.active {
  background-color: #3498db;
  border-color: #3498db;
  color: white;
  font-weight: bold;
}

/* Task List */
.task-list {
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 1rem;
}

/* Task Item */
.task-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 12px;
  border-radius: 4px;
  border-left: 5px solid #3498db;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.task-item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.task-item input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
  cursor: pointer;
}

.task-item span {
  flex: 1;
  margin-right: 10px;
  word-break: break-word;
}

.task-item button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s;
}

.task-item button:hover {
  background-color: #c0392b;
}

/* Responsive design */
@media (max-width: 480px) {
  .app {
    margin: 0;
    padding: 1rem;
    border-radius: 0;
    max-width: 100%;
  }
  
  .task-form {
    flex-direction: column;
  }
  
  .task-form input,
  .task-form button {
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  
  .task-filter {
    flex-wrap: wrap;
  }
}
