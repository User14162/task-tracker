# Day 1: JavaScript Fundamentals & React Basics

Today we'll make sure you have the JavaScript fundamentals needed for React and get you started with creating your first React components.

## Learning Objectives

By the end of today, you will:
- Review key JavaScript concepts essential for React
- Understand what React is and why it's useful
- Learn JSX syntax and its relationship to HTML
- Create your first React components

## JavaScript Fundamentals for React

Before diving into React, let's review the JavaScript concepts you'll use most frequently:

### 1. Arrow Functions

```javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function (shorter syntax)
const add = (a, b) => a + b;

// Arrow function with multiple statements
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

### 2. Object and Array Destructuring

```javascript
// Object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // 'John'

// Array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first); // 1
```

### 3. Spread and Rest Operators (...)

```javascript
// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread operator with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest operator in functions
const sum = (...args) => args.reduce((total, num) => total + num, 0);
sum(1, 2, 3, 4); // 10
```

### 4. Array Methods: map, filter, and reduce

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each item
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - keep items that match a condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce - accumulate a single result
const sum = numbers.reduce((total, num) => total + num, 0); // 15
```

## Introduction to React

React is a JavaScript library for building user interfaces, particularly single-page applications. It allows us to create reusable UI components that efficiently update when data changes.

### Key React Concepts

1. **Components**: The building blocks of React applications
2. **JSX**: A syntax extension that lets you write HTML-like code in JavaScript
3. **Virtual DOM**: React's efficient way of updating the actual DOM
4. **Props**: How we pass data from parent to child components
5. **State**: How components maintain and update their data

### JSX Basics

JSX looks like HTML but has some important differences:

```jsx
// HTML:
<div class="container">
  <h1>Hello, world!</h1>
</div>

// JSX:
<div className="container">
  <h1>Hello, world!</h1>
</div>
```

Key differences:
- `class` becomes `className` (since `class` is a reserved word in JavaScript)
- All tags must be closed (even self-closing tags like `<img>` must be `<img />`)
- JavaScript expressions can be included with curly braces: `{expression}`

## Your First React Component

React components are JavaScript functions that return JSX. Let's create a simple component:

```jsx
function Greeting() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first component.</p>
    </div>
  );
}

export default Greeting;
```

## Today's Challenges

### Challenge 1: Create a Task Component

Open `src/days/day1/exercises/Task.js` and complete the component by:
1. Creating a React functional component
2. Returning a JSX element that displays a task (hardcoded for now)
3. Exporting the component as default

### Challenge 2: Compose Components Together

Open `src/days/day1/exercises/TaskList.js` and:
1. Import your Task component
2. Create a TaskList component that renders multiple Task components
3. Export the TaskList component

## What's Next

Tomorrow, we'll learn about React props, which allow us to pass data to our components to make them dynamic!
