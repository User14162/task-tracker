# Day 2: Components, Props & Basic State

Today we'll make our components dynamic with props and introduce state management with the useState hook.

## Learning Objectives

By the end of today, you will:
- Understand and use props to make components dynamic
- Learn about React's useState hook for state management
- Handle events in React components
- Implement a form for creating new tasks

## Props: Making Components Dynamic

Props (short for "properties") are how we pass data from parent to child components. They make our components reusable and dynamic.

### Passing and Receiving Props

```jsx
// Parent component passing props
function App() {
  return <Greeting name="Alice" age={25} />;
}

// Child component receiving props
function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

// We can also use destructuring for cleaner code
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
```

### Props Best Practices

1. Props are read-only - never modify props directly
2. Use descriptive prop names
3. Provide default values when it makes sense

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

## Managing State with useState

State is data that changes over time in your application. React provides the `useState` hook to add state to functional components.

### Basic useState Example

```jsx
import { useState } from 'react';

function Counter() {
  // useState returns an array with two items:
  // 1. The current state value
  // 2. A function to update that value
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Rules for useState

1. Only call hooks at the top level of your component
2. Don't call hooks inside loops, conditions, or nested functions
3. Always provide an initial value
4. Use the update function (like `setCount`) to change state, never modify state directly

## Handling Events in React

React events are similar to DOM events but use camelCase naming and pass functions as event handlers.

```jsx
function Button() {
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  
  return <button onClick={handleClick}>Click Me</button>;
  
  // Or inline:
  // return <button onClick={() => console.log('Clicked!')}>Click Me</button>;
}
```

Common React events:
- `onClick` - triggered when an element is clicked
- `onChange` - triggered when form field value changes
- `onSubmit` - triggered when a form is submitted
- `onMouseOver` - triggered when mouse moves over an element
- `onFocus` - triggered when an element receives focus
- `onBlur` - triggered when an element loses focus

## Today's Challenges

### Challenge 1: Update Task Component to Use Props

Open `src/days/day2/exercises/Task.js` and:
1. Modify the Task component to accept props
2. Use the props to display the task's text instead of hardcoded text
3. Add a conditional styling (e.g., text decoration: line-through) based on a completed prop

### Challenge 2: Create a Form Component with State

Open `src/days/day2/exercises/TaskForm.js` and:
1. Create a form with an input field and a submit button
2. Use useState to track the input value
3. Implement event handlers for input changes and form submission
4. For now, just console.log the new task on submission

## What's Next

Tomorrow, we'll learn how to manage lists of tasks, implement task deletion and completion, and work with more complex state management!
