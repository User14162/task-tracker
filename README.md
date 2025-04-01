# React Task Tracker - 4-Day Learning Project

Welcome to this hands-on React learning project! This Task Tracker application is designed to teach you React fundamentals in just 4 days through practical, hands-on coding challenges.

## Project Overview

By the end of this 4-day learning journey, you'll have built a complete Task Tracker application with the following features:
- Add new tasks
- Delete tasks
- Mark tasks as complete
- Filter tasks by status
- Persist tasks using localStorage

## Getting Started

### Prerequisites
- Basic knowledge of HTML and CSS
- Fundamental understanding of JavaScript (variables, functions, arrays)
- Node.js and npm installed on your machine

### Setup Instructions
1. Clone this repository
   ```
   git clone https://github.com/yourusername/react-task-tracker.git
   cd react-task-tracker
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Learning Path

This project is structured as a 4-day learning journey:

### Day 1: JavaScript Fundamentals & React Basics
- JavaScript review
- React setup and JSX basics
- Creating your first components
- Challenge: Create a static task item component

### Day 2: Components, Props & Basic State
- Understanding props
- Introduction to state with useState
- Handling events
- Challenge: Implement task creation form

### Day 3: State Management & Forms
- Managing lists in state
- Working with forms
- Conditional rendering
- Challenge: Implement task deletion and completion

### Day 4: Effects, Storage & Styling
- Side effects with useEffect
- Persisting data with localStorage
- Styling in React
- Challenge: Implement filtering and localStorage persistence

## How to Use This Repository

Each day has its own folder under `src/days/` containing:
1. A README with concepts and instructions
2. Starter code with challenges (incomplete parts marked with TODO comments)
3. Solution code for reference

To progress through the course:

1. Start with Day 1 by reading its README
2. Complete the challenges in each exercise file
3. Check your solutions against the provided solutions
4. Move on to the next day once you feel comfortable

## Project Structure

```
task-tracker/
├── README.md                     # This file
├── package.json                  # Project dependencies
├── public/                       # Static files
├── src/
│   ├── App.js                    # Main application component
│   ├── index.js                  # Entry point
│   ├── index.css                 # Global styles
│   ├── components/               # Shared components (final versions)
│   └── days/                     # Day-by-day learning materials
│       ├── day1/                 # JavaScript Fundamentals & React Basics
│       ├── day2/                 # Components, Props & Basic State
│       ├── day3/                 # State Management & Forms
│       └── day4/                 # Effects, Storage & Styling
```

## Extensions for After the Course

Once you've completed the 4-day curriculum, try these extensions:
- Add due dates to tasks
- Implement task categories or tags
- Add a dark/light theme toggle
- Create a task search feature
- Refactor to use useReducer for more complex state management

## Additional Resources

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)

Happy coding!