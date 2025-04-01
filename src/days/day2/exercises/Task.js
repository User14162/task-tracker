// src/days/day2/exercises/Task.js

/*
 * CHALLENGE 1: Update Task component to use props
 * 
 * TODO: Modify the Task component to accept and use props
 * The component should:
 * 1. Accept props for task data (taskText and completed)
 * 2. Display the taskText prop instead of hardcoded text
 * 3. Apply a style of textDecoration: 'line-through' to the span if completed is true
 * 4. Be exported as the default export
 * 
 * HINT: Use destructuring to extract props and conditional styling with a ternary operator
 */

function Task(/* TODO: Add props parameter here */) {
  return (
    <div className="task-item">
      <input type="checkbox" />
      {/* TODO: Replace this with the taskText prop */}
      <span>Complete React basics</span> 
      <button>Delete</button>
    </div>
  );
}

export default Task;
