import React from "react";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  return (
    <div className="w-scree h-screen bg-gray-900 text-white flex p-10 gap-6 ">
      <Create />
      <Read />
    </div>
  );
};

export default App;
