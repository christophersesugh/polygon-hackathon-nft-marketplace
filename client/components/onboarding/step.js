import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Step({ step, index }) {
  return (
    <Zoom>
      <div className="flex items-center">
        <span className="hover:bg-blue-600 hover:text-white transition-all duration-300 p-8 rounded-full flex items-center text-xl bg-white text-black mr-4 drop-shadow-xl">
          0{index + 1}
        </span>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl text-blue-900 capitalize mb-4">
            {step.title}
          </h2>
          <p className="text-slate-500">{step.body}</p>
        </div>
      </div>
    </Zoom>
  );
}
