import React from "react";
import { useState } from "react";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  const [taskList, settaskList] = useState([
    { 
      title: "Kaam karo", 
      isCompleted: true, 
      id: 1 
    },
  ]);
  const [completed, setcompleted] = useState(false);

  return (
    <div className="w-scree h-screen bg-gray-900 text-white flex p-10 gap-6 ">
      <Create taskList={taskList} settaskList={settaskList} completed={completed} setcompleted={setcompleted} />
      <Read taskList={taskList} settaskList={settaskList} completed={completed} setcompleted={setcompleted} />
    </div>
  );
};

export default App;
