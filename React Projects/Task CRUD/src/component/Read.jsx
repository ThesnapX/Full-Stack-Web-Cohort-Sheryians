import React, { useContext } from "react";
import { toast } from "react-toastify";
import { taskContext } from "../wrapper";

const Read = () => {
  const [taskList, settaskList] =  useContext(taskContext)

  // const completed = props.completed
  // const setcompleted = props.setcompleted

  const deleteTask = (id) => {
    const filterTask = taskList.filter((task) => task.id != id);
    settaskList(filterTask);
    toast.error("Task added Successfully");
  };
  const renderTask = taskList.map((task) => (
    <div className="w-full bg-gray-800 p-2 hover:bg-gray-700 transition-all ease-linear rounded flex justify-between mb-2">
      <li className="text-sm" key={task.id}>
        {task.title}
      </li>
      <button
        className="text-[10px] text-red-700"
        onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  ));
  return (
    <div className="w-[40%] p-4 ">
      <h1 className="text-5xl font-thin mb-5">
        <span className="text-red-400">Pending</span> task
      </h1>
      <hr className="mb-5" />
      <ol>{renderTask}</ol>
    </div>
  );
};

export default Read;
