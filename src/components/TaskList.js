import React from "react";
import Task from "./Task";

function TaskList({tasks, selectedCategory, onDeleteTask}) {
  const filteredTasks = selectedCategory === "All" 
  ? tasks : tasks.filter((task) => task.category === selectedCategory);
  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task category={task.category} text={task.text} key={index} onDelete={(text) => onDeleteTask(text)}/>
      ))}
      
    </div>
  );
}

export default TaskList;
