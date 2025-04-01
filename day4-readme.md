# Day 4: Effects, Storage & Styling

Today we'll add the finishing touches to our Task Tracker app with useEffect, localStorage, filtering, and styling.

## Learning Objectives

By the end of today, you will:
- Understand and use the useEffect hook for side effects
- Implement data persistence with localStorage
- Add task filtering functionality
- Style your React application with CSS

## Understanding useEffect

The useEffect hook lets you perform side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM.

### Basic useEffect Syntax

```jsx
import { useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This code runs after every render
    console.log('Component rendered');
    
    // Optional return function for cleanup
    return () => {
      console.log('Component will unmount or re-render');
    };
  }, []); // Empty dependency array means run only on mount/unmount
}
```

### Dependency Array

The second argument to useEffect is a dependency array:
- `useEffect(fn)` - Runs after every render
- `useEffect(fn, [])` - Runs only on mount and unmount
- `useEffect(fn, [a, b])` - Runs when a or b changes

### Common useEffect Use Cases

1. Data fetching
2. Setting up subscriptions
3. Manually changing the DOM
4. Logging
5. Persisting data

## LocalStorage for Data Persistence

localStorage allows you to save key/value pairs in the browser, persisting even when the page is refreshed.

### Basic localStorage Methods

```javascript
// Storing data
localStorage.setItem('key', 'value');
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));

// Retrieving data
const value = localStorage.getItem('key');
const user = JSON.parse(localStorage.getItem('user'));

// Removing data
localStorage.removeItem('key');

// Clearing all data
localStorage.clear();
```

### Using localStorage with React

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

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

  // Rest of component
}
```

## Filtering Data

Filtering lets users focus on specific items that match certain criteria.

### Implementing Filters

```jsx
import { useState } from 'react';

function TaskList({ tasks }) {
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  
  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Today's Challenges

### Challenge 1: Implement localStorage Persistence

Open `src/days/day4/exercises/App.js` and:
1. Use useEffect to load tasks from localStorage when the app starts
2. Use useEffect to save tasks to localStorage whenever tasks change

### Challenge 2: Create a Filter Component

Open `src/days/day4/exercises/TaskFilter.js` and:
1. Create a component with buttons to filter tasks by status (All, Active, Completed)
2. Use the props passed from the parent component to update the filter state

### Challenge 3: Style the Application

Open `src/days/day4/exercises/styles.css` and:
1. Add CSS styles to make the app visually appealing
2. Style the task items, form, and filter buttons
3. Add hover and active states for interactive elements

## What's Next

Congratulations on completing the 4-day React Task Tracker project! Here are some ideas to extend your learning:

1. Add task categories or tags
2. Implement task priorities (high, medium, low)
3. Add due dates to tasks
4. Create a dark/light theme toggle
5. Refactor to use useReducer for more complex state management
6. Add drag-and-drop to reorder tasks
7. Create a mobile-responsive design
