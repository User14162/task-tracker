// src/components/TaskForm.js
import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        aria-label="Task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

// src/components/TaskList.js
import Task from './Task';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks match the current filter. Add one above!</p>
      ) : (
        tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

// src/components/Task.js
function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggleTask(task.id)} 
        aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
      />
      
      <span>{task.text}</span>
      
      <button 
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete task "${task.text}"`}
      >
        Delete
      </button>
    </div>
  );
}

export default Task;

// src/components/TaskFilter.js
function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filter">
      <button 
        className={currentFilter === 'all' ? 'active' : ''} 
        onClick={() => onFilterChange('all')}
        aria-label="Show all tasks"
        aria-pressed={currentFilter === 'all'}
      >
        All
      </button>
      <button 
        className={currentFilter === 'active' ? 'active' : ''} 
        onClick={() => onFilterChange('active')}
        aria-label="Show active tasks only"
        aria-pressed={currentFilter === 'active'}
      >
        Active
      </button>
      <button 
        className={currentFilter === 'completed' ? 'active' : ''} 
        onClick={() => onFilterChange('completed')}
        aria-label="Show completed tasks only"
        aria-pressed={currentFilter === 'completed'}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
