import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-4"></div>
      </div>
      <p className="text-xl text-gray-900 font-semibold">Loading...</p>
      <p className="text-sm text-gray-500 mt-2">Please wait while we fetch your content</p>
    </div>
  );
};

export default Loading;