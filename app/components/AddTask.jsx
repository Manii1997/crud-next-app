"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addTask }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleSubmitNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      description: newTaskDescription,
    };
    addTask(newTask);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setModalOpen(false);
  };

  return (
    <div className="mt-3">
      <button
        className="btn btn-success text-white flex gap-2 w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new task <AiOutlinePlus className="self-center" />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTask}>
          <h1 className="font-semibold text-xl">Add New Task</h1>
          <div className="flex flex-col gap-3 mt-5">
            <input
              type="text"
              value={newTaskTitle}
              placeholder="Enter title"
              className="input input-bordered w-full text-[14px]"
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <textarea
              value={newTaskDescription}
              placeholder="Enter Description"
              className="textarea textarea-bordered w-full text-[14px]"
              onChange={(e) => setNewTaskDescription(e.target.value)}
            ></textarea>
            <button className="btn btn-success text-white" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
