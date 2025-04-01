// src/days/day3/exercises/Task.js

/*
 * CHALLENGE 2: Complete the Task component
 * 
 * TODO: Make the Task component fully functional
 * The component should:
 * 1. Accept props for task data, onToggleTask and onDeleteTask functions
 * 2. Implement handleCheckboxChange to call onToggleTask with task.id
 * 3. Implement handleDelete to call onDeleteTask with task.id
 * 4. Make the checkbox reflect the task's completed state
 * 5. Apply appropriate styling based on the completed state
 */

function Task({ task, onToggleTask, onDeleteTask }) {
  // TODO: Implement handleCheckboxChange to call onToggleTask with task.id
  
  // TODO: Implement handleDelete to call onDeleteTask with task.id
  
  return (
    <div className="task-item">
      {/* TODO: Add onChange handler and checked attribute */}
      <input type="checkbox" />
      
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      
      {/* TODO: Add onClick handler */}
      <button>Delete</button>
    </div>
  );
}

export default Task;
