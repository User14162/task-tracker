// src/days/day2/solutions/Task.js
function Task({ taskText, completed }) {
  return (
    <div className="task-item">
      <input type="checkbox" checked={completed} readOnly />
      <span 
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {taskText}
      </span>
      <button>Delete</button>
    </div>
  );
}

export default Task;

// src/days/day2/solutions/TaskForm.js
import { useState } from 'react';

function TaskForm() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      console.log('New task:', inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
