import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <div className="p-2 flex flex-col items-center justify-center  h-screen">
        <h1 className="text-4xl font-bold uppercase text-center">
          Counter <span className="bg-amber-300 px-2 p-1 rounded-md">App</span>
        </h1>
        <p className="text-center w-[80%] mt-8">
          This is counter app. For increment click{" "}
          <span className="bg-gray-300 px-2 py-1 rounded-md leading-0">+</span>{" "}
          button and for Decrement click{" "}
          <span className="bg-gray-300 px-2 py-1 rounded-md leading-0">-</span>{" "}
          button
        </p>
        <Counter />
        <p className="mt-4 text-sm opacity-55">Made by HarryDevops</p>
      </div>
    </>
  );
};

export default App;
