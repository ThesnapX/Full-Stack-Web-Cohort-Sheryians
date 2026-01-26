import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-white rounded-md gap-2 h-15 items-center justify-center ">
        <img className="w-8 h-8" src="src/assets/firebase.svg" alt="" />
        <h1 className="text-xl font-semibold">FireBase Contact</h1>
      </div>
    </>
  );
};

export default Navbar;
