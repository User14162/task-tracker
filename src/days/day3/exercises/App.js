// src/days/day3/exercises/App.js

import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

/*
 * CHALLENGE 1: Implement task state management
 * 
 * TODO: Create a main App component that manages task state
 * The component should:
 * 1. Create state for tasks array
 *    - Each task should have: id, text, completed properties
 * 2. Implement addTask function to add a new task
 * 3. Implement deleteTask function to remove a task
 * 4. Implement toggleTask function to mark a task as completed/incomplete
 * 5. Pass these functions and the tasks to the appropriate child components
 */

function App() {
  // TODO: Create state for tasks array
  
  // TODO: Implement function to add a new task
  
  // TODO: Implement function to delete a task
  
  // TODO: Implement function to toggle a task's completed status
  
  return (
    <div className="app">
      <h1>Task Tracker</h1>
      
      {/* TODO: Pass the addTask function to TaskForm */}
      <TaskForm />
      
      {/* TODO: Pass tasks array and functions to TaskList */}
      <TaskList />
    </div>
  );
}

export default App;
