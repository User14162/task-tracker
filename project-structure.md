# React Task Tracker - 4-Day Learning Project

## Project Structure

```
task-tracker/
├── README.md                     # Project overview and instructions
├── package.json                  # Project dependencies
├── public/                       # Static files
├── src/
│   ├── App.js                    # Main application component
│   ├── index.js                  # Entry point
│   ├── index.css                 # Global styles
│   ├── components/               # Shared components (final versions)
│   │   ├── TaskForm.js           # Form for adding tasks
│   │   ├── TaskList.js           # List of tasks
│   │   ├── TaskItem.js           # Individual task component
│   │   └── TaskFilter.js         # Filter component
│   └── days/                     # Day-by-day learning materials
│       ├── day1/                 # JavaScript Fundamentals & React Basics
│       │   ├── README.md         # Day 1 concepts and instructions
│       │   ├── exercises/        # Incomplete components with TODOs
│       │   └── solutions/        # Completed components for reference
│       ├── day2/                 # Components, Props & Basic State
│       ├── day3/                 # State Management & Forms
│       └── day4/                 # Effects, Storage & Styling
```

## Setup Instructions

1. Make sure you have Node.js installed (version 16 or newer)

2. Create a new React project:
```bash
npx create-react-app task-tracker
cd task-tracker
```

3. Replace the default files with the project files

4. Start the development server:
```bash
npm start
```

5. Open http://localhost:3000 in your browser

## Day-by-Day Structure

Each day follows the same structure:
- README.md with concepts and instructions
- Exercise files with TODOs that you need to complete
- Solution files for reference if you get stuck

The project gradually builds from static components to a fully functional app:
- Day 1: Create basic components with JSX
- Day 2: Make components dynamic with props and state
- Day 3: Implement task creation, deletion and completion
- Day 4: Add filtering, persistence and styling
