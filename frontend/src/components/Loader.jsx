import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-[#7747ff] animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-[#7747ff] animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#7747ff] animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
