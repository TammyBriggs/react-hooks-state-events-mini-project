import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleDeleteTask = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  }

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={selectedCategory} 
      setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
