// src/days/day1/solutions/Task.js
function Task() {
  return (
    <div className="task-item">
      <input type="checkbox" />
      <span>Learn React basics</span>
      <button>Delete</button>
    </div>
  );
}

export default Task;

// src/days/day1/solutions/TaskList.js
import Task from './Task';

function TaskList() {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default TaskList;
