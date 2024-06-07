"use client";

import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { IoMdSearch } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTaskList(storedTasks);
  }, []);

  const addNewTask = (task) => {
    const updatedTasks = [task, ...taskList];
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task added successfully!");
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.info("Task updated successfully!");
  };

  const deleteTask = (id) => {
    const filteredTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTaskList);
    localStorage.setItem("tasks", JSON.stringify(filteredTaskList));
    toast.error("Task deleted successfully!");
  };

  const filteredTasks = taskList.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container container mx-auto p-3">
      <ToastContainer position="top-center" />
      <h1 className="heading text-2xl font-bold text-center">
        CRUD APPLICATION
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:justify-between">
        <div>
          <AddTask addTask={addNewTask} />
        </div>

        <div className="input input-bordered flex items-center gap-2 mt-3">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoMdSearch />
        </div>
      </div>
      {filteredTasks.length > 0 ? (
        <ul className="md:grid md:grid-cols-3 gap-3 mt-10">
          {filteredTasks.map((taskItem) => (
            <TodoList
              key={taskItem.id}
              taskDetails={taskItem}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </ul>
      ) : (
        <p className="text-center mt-10">No tasks found</p>
      )}
    </div>
  );
};

export default Home;
