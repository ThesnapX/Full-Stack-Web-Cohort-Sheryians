import React from "react";
import { nanoid } from "nanoid";
// import { useState } from "react";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { taskContext } from "../wrapper";

const Create = () => {
  const [taskList, settaskList] =  useContext(taskContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    const addNewTask = [...taskList];
    addNewTask.push(data);
    settaskList(addNewTask);
    reset();
    toast.success("Task added Successfully")
  };
  return (
    <div className=" w-[60%] p-4  rounded-xl ">
      <h1 className="text-5xl font-thin mb-5">
        Set <span className="text-red-400 ">Reminders</span> for task
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title not empty" })} //Syntax of react hook form
          className="border-b w-full outline-0 p-2"
          type="text"
          placeholder="Add new task"
        />
        {errors && errors.title && errors.title.message && (
          <p className="text-red-600 text-[12px] px-2">
            {errors.title.message}
          </p>
        )}
        {/* <input
        className="w-1/2"
          onChange={(e) => {
            setcompleted(e.target.checked);
          }}
          checked={completed}
          type="checkbox"
          name="TaskComleted"
          id=""
        /> */}
        <button className="py-2 px-10 border hover:bg-white hover:text-black transition-all ease-linear mt-10 rounded ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
