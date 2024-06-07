import React, { useState } from "react";
import Modal from "./Modal";

const UpdatedTask = ({ task, updateTask, setModalOpenEdit }) => {
  const [editTaskTitle, setEditTaskTitle] = useState(task.title);
  const [editTaskDescription, setEditTaskDescription] = useState(
    task.description
  );

  const handleEditTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...task,
      title: editTaskTitle,
      description: editTaskDescription,
    };
    updateTask(updatedTask);
    setModalOpenEdit(false);
  };

  return (
    <div>
      <Modal modalOpen={true} setModalOpen={setModalOpenEdit}>
        <form onSubmit={handleEditTask}>
          <h1 className="font-semibold text-xl">Edit Task</h1>
          <div className="flex flex-col gap-3 mt-5">
            <input
              type="text"
              value={editTaskTitle}
              placeholder="Enter title"
              className="input input-bordered w-full text-[14px]"
              onChange={(e) => setEditTaskTitle(e.target.value)}
            />
            <textarea
              value={editTaskDescription}
              placeholder="Enter Description"
              className="textarea textarea-bordered w-full text-[14px]"
              onChange={(e) => setEditTaskDescription(e.target.value)}
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

export default UpdatedTask;
