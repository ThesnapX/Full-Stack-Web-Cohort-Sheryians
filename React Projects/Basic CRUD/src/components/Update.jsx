import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

const Update = ({
  onClose,
  taskList,
  setSelectedTask,
  setTaskList,
  markCompleted,
  selectedTask,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Selected Task update function
  useEffect(() => {
    if (selectedTask) {
      reset({
        taskName: selectedTask.taskName,
        difficulty: selectedTask.difficulty,
      });
    }
  }, [selectedTask, reset]);
  const onSubmit = (data) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              taskName: data.taskName,
              difficulty: data.difficulty,
            }
          : task,
      ),
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
    w-[70%] border-2 border-white/40 bg-[#111]/20 backdrop-blur-sm p-6 rounded-sm shadow-lg relative "
      >
        <IoIosClose
          onClick={onClose}
          className="absolute top-1 right-1 text-white/60 hover:text-white cursor-pointer text-4xl"
        />

        <h1 className="text-center text-2xl font-semibold tracking-wide text-white mb-6">
          Update Task
        </h1>

        <div className="flex flex-col gap-4">
          {/* Title Input */}
          <div>
            <input
              className={`
          w-full bg-transparent border-b-2 p-2 text-white placeholder-white/50 outline-none transition-all duration-200 focus:border-amber-500
          ${
            errors.taskName
              ? "border-red-500 text-red-500 focus:border-red-500"
              : "border-white/60"
          }
        `}
              type="text"
              placeholder="Task Name"
              {...register("taskName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "*Task title required of minimum 3 characters",
                },
              })}
            />
            {errors.taskName && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.taskName.message}
              </p>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative">
            <select
              className={`
          w-full bg-transparent border-b-2 p-2 text-white outline-none appearance-none cursor-pointer transition-all duration-200 
          ${
            errors.difficulty
              ? "border-red-500 text-red-500 focus:border-red-500"
              : "border-white/60"
          }
        `}
              {...register("difficulty", { required: true })}
            >
              <option className="bg-[#111] text-white" value="Easy">
                Easy
              </option>
              <option className="bg-[#111] text-white" value="Normal">
                Normal
              </option>
              <option className="bg-[#111] text-white" value="Hard">
                Hard
              </option>
            </select>

            {/* Custom dropdown arrow */}
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/60">
              ▼
            </span>

            {errors.difficulty && (
              <p className="text-red-500 mt-1 text-sm">
                Difficulty is required
              </p>
            )}
          </div>

          {/* Submit Button */}

          <div className="flex justify-between w-full gap-2 mt-6">
            <button
              type="button"
              onClick={() => {
                markCompleted(selectedTask.id);
                onClose();
              }}
              className="
        border bg-white text-[#111] p-2 rounded-sm transition-all duration-200 hover:bg-amber-500 hover:text-black active:scale-95 "
            >
              Mark Completed
            </button>
            <button
              className="
        border border-white p-2 rounded-sm text-white transition-all duration-200 hover:bg-white hover:text-black active:scale-95 "
            >
              Update Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
