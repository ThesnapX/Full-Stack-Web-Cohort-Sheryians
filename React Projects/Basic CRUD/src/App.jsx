import React, { useState } from "react";
import Filter from "./components/Filter";
import Read from "./components/Read";
import Create from "./components/Create";
import { nanoid } from "nanoid";
import Update from "./components/Update";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  // UseState Declarations
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  // Filtered Task Funcnality
  const filteredTasks =
    filterDifficulty === "All"
      ? taskList
      : taskList.filter((task) => task.difficulty === filterDifficulty);

  const deleteTask = (id) => {
    const filterTask = taskList.filter((task) => task.id != id);
    setTaskList(filterTask);
    toast.error("Task deleted Successfully");
  };

  // Mark Completed Functionality
  const markCompleted = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    const filterTask = taskList.filter((task) => task.id != id);
    setTaskList(filterTask);
    toast.error("Task Marked Completed");
  };

  return (
    <>
      <div className="px-4 py-2 flex flex-col items-center relative">
        <h1 className="font-bold text-4xl mt-4">My To-Do</h1>
        <div className="h-px w-screen bg-white mt-4 opacity-30"></div>
        <Filter
          filterDifficulty={filterDifficulty}
          setFilterDifficulty={setFilterDifficulty}
        />
        <Read
          taskList={filteredTasks}
          setTaskList={setTaskList}
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          setSelectedTask={setSelectedTask}
          deleteTask={deleteTask}
        />
        {showCreate && (
          <Create
            onClose={() => setShowCreate(false)}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
        {showUpdate && (
          <Update
            onClose={() => setShowUpdate(false)}
            taskList={taskList}
            setTaskList={setTaskList}
            markCompleted={markCompleted}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        )}
        <div className="fixed bottom-8 left-0 w-full px-4">
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="
      w-full
      bg-[#111]/40
      border
      backdrop-blur-sm
      border-white
      py-3
      text-white
      hover:bg-[#414141]/40
      duration-300
    "
          >
            Add Task
          </button>
        </div>
        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
};

export default App;
