// src/days/day3/solutions/App.js
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  
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
  
  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask} 
        onToggleTask={toggleTask} 
      />
    </div>
  );
}

export default App;

// src/days/day3/solutions/Task.js
function Task({ task, onToggleTask, onDeleteTask }) {
  const handleCheckboxChange = () => {
    onToggleTask(task.id);
  };
  
  const handleDelete = () => {
    onDeleteTask(task.id);
  };
  
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={handleCheckboxChange} 
      />
      
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;

// src/days/day3/solutions/TaskList.js
import Task from './Task';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
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
