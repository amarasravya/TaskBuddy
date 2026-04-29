import React, { useState, useEffect } from "react";
import Taskform from "./Components/TaskForm.jsx";
import ProgressTracker from "./Components/ProgressTracker.jsx";
import TaskList from "./Components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage (when app starts)
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage (whenever tasks change)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <p><i>Friendly Task Manager</i></p>

      <Taskform addTask={addTask} />

      <ProgressTracker tasks={tasks} />

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;