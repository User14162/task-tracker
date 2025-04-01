# Day 3: State Management & Forms

Today we'll learn to manage lists in state, lift state up to parent components, and implement task deletion and completion.

## Learning Objectives

By the end of today, you will:
- Manage arrays in state
- Lift state up to parent components
- Implement adding and removing items from state
- Update items in a state array
- Connect components through props and callback functions

## Managing Lists in State

When working with lists in React, we often need to keep an array in state and render components for each item.

### Creating a List

```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

Key points:
- Always use a unique `key` prop when rendering lists
- The `key` helps React identify which items have changed

### Adding Items to a List

```jsx
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(), // Simple way to generate a unique ID
    text,
    completed: false,
  };
  setTodos([...todos, newTodo]); // Add to end of list
  // OR setTodos([newTodo, ...todos]); // Add to beginning of list
};
```

### Removing Items from a List

```jsx
const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};
```

### Updating Items in a List

```jsx
const toggleComplete = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};
```

## Lifting State Up

Often, multiple components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

### Example: Lifting State Up

```jsx
function TodoApp() {
  // State is lifted up to the parent component
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    // Implementation...
  };

  const removeTodo = (id) => {
    // Implementation...
  };

  return (
    <div>
      {/* Pass down state and update functions as props */}
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}
```

## Today's Challenges

### Challenge 1: Implement Task State Management

Open `src/days/day3/exercises/App.js` and:
1. Create state to track an array of tasks
2. Implement functions to add, remove, and toggle tasks
3. Pass these functions down to the appropriate child components

### Challenge 2: Complete the Task Component

Open `src/days/day3/exercises/Task.js` and:
1. Make the checkbox functional by handling its onChange event
2. Make the delete button functional by calling the passed onDelete prop
3. Ensure the component reflects the completed state properly

### Challenge 3: Update TaskList to Render Tasks

Open `src/days/day3/exercises/TaskList.js` and:
1. Map over the tasks array to render Task components
2. Pass the appropriate props to each Task component

## What's Next

Tomorrow, we'll learn about the useEffect hook, implement localStorage for persistence, add task filtering, and style our application!
