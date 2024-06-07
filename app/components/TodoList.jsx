import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdatedTask from "./UpdateTask";

const TodoList = ({ taskDetails, deleteTask, updateTask }) => {
  const { id, title, description } = taskDetails;
  const [modalOpenEdit, setModalOpenEdit] = useState(false);

  const handleDelete = () => {
    deleteTask(taskDetails.id);
  };

  return (
    <div key={id}>
      <div className="list-container p-5 border-2 rounded flex justify-between gap-3 mb-3 md:mb-0">
        <div className="shrink-2">
          <h1 className="title text-xl font-semibold">{title}</h1>
          <p className="desc mt-3">{description}</p>
        </div>
        <div className="flex gap-2 self-start">
          <button onClick={() => setModalOpenEdit(true)}>
            <FaPenToSquare size={20} className="text-info" />
          </button>
          <button onClick={handleDelete}>
            <RiDeleteBin6Line size={20} className="text-error" />
          </button>
        </div>
      </div>
      {modalOpenEdit && (
        <UpdatedTask
          task={taskDetails}
          updateTask={updateTask}
          setModalOpenEdit={setModalOpenEdit}
        />
      )}
    </div>
  );
};

export default TodoList;
