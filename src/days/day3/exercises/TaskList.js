// src/days/day3/exercises/TaskList.js

import Task from './Task';

/*
 * CHALLENGE 3: Update TaskList to render tasks
 * 
 * TODO: Modify the TaskList component to render Task components for each task
 * The component should:
 * 1. Accept props for tasks array, onToggleTask and onDeleteTask
 * 2. Map over the tasks array to render a Task component for each task
 * 3. Pass the appropriate props to each Task component
 * 4. Display a message when there are no tasks
 */

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      
      {/* TODO: Render Task components for each task in the tasks array */}
      {/* If there are no tasks, display "No tasks yet. Add one above!" */}
      
    </div>
  );
}

export default TaskList;
