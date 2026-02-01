import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const usrStep = prompt("Enter step value", "1");
    const parsed = Number(usrStep);

    if (!isNaN(parsed) && parsed > 0) {
      setStep(parsed);
    }
  }, []);

  const incrementFunc = () => {
    setCount((prev) => Math.min(prev + step, 100));
  };

  const decrementFunc = () => {
    setCount((prev) => Math.max(prev - step, 0));
  };

  const resetFunc = () => {
    setCount(0);
  };

  const isIncrementDisabled = count >= 100;
  const isDecrementDisabled = count <= 0;

  return (
    <>
      <div className="mt-20 flex flex-col items-center gap-4">
        <p>Step: {step}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={decrementFunc}
            disabled={isDecrementDisabled}
            className={`px-3 py-1 text-4xl rounded-md shadow-xl duration-200
              ${
                isDecrementDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-amber-300 active:scale-[0.95]"
              }`}
          >
            -
          </button>

          <p className="bg-gray-200 px-10 py-4 text-4xl rounded-md shadow-xl">
            {count}
          </p>

          <button
            onClick={incrementFunc}
            disabled={isIncrementDisabled}
            className={`px-3 py-1 text-4xl rounded-md shadow-xl duration-200
              ${
                isIncrementDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-amber-300 active:scale-[0.95]"
              }`}
          >
            +
          </button>
        </div>

        <button
          onClick={resetFunc}
          className="px-12 py-4 rounded-full mt-8 shadow-xl hover:bg-amber-400 duration-300 bg-amber-200"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
