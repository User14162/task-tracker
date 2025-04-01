// src/days/day4/exercises/TaskFilter.js

/*
 * CHALLENGE 2: Create a Filter component
 * 
 * TODO: Create a TaskFilter component with filter buttons
 * The component should:
 * 1. Accept props for currentFilter and onFilterChange
 * 2. Display three buttons (All, Active, Completed)
 * 3. Highlight the currently selected filter button with an 'active' class
 * 4. Call onFilterChange when a filter button is clicked
 */

function TaskFilter({ currentFilter, onFilterChange }) {
  // TODO: Create the filter buttons
  
  return (
    <div className="task-filter">
      {/* TODO: Create three buttons (All, Active, Completed) */}
      {/* Add the 'active' class to the button that matches currentFilter */}
      {/* Call onFilterChange with the appropriate filter value when clicked */}
    </div>
  );
}

export default TaskFilter;
