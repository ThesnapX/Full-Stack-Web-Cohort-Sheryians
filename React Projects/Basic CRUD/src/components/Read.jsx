import { useState } from "react";
import { GoPencil } from "react-icons/go";
import { TbHttpDelete } from "react-icons/tb";
import Create from "./Create";
const Read = ({
  taskList,
  setSelectedTask,
  deleteTask,
  showUpdate,
  setShowUpdate,
}) => {
  return (
    <>
      {taskList.map((value) => {
        return (
          <div
            onClick={() => {
              setSelectedTask(value);
              setShowUpdate(true);
            }}
            key={value.id}
            className="border border-gray-300 p-4 mt-4 w-full flex items-center justify-between
                  hover:bg-[#414141]/40
      duration-300"
          >
            <h1 className="font-semibold text-xl text-wrap w-[40%]">
              {value.taskName}
            </h1>
            <p className="text-amber-500">{value.difficulty}</p>

            <div className="flex items-center gap-5">
              <GoPencil
                onClick={() => {
                  setSelectedTask(value);
                  setShowUpdate(true);
                }}
                className="text-2xl  hover:text-amber-500 duration-300"
              />
              <TbHttpDelete
                onClick={() => deleteTask(value.id)}
                className="text-4xl text-white hover:text-red-500 duration-300"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Read;
