import React, { createContext , useState} from "react";

export const taskContext = createContext(null);
const Wrapper = (props) => {
    const [taskList, settaskList] = useState([])

    //   const [completed, setcompleted] = useState(false);
  return (
    <taskContext.Provider value={[taskList, settaskList]}>
      {props.children}
    </taskContext.Provider>
  );
};

export default Wrapper;
