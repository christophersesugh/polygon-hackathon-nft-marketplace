import React from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

export default function Accordion({ question, index }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full rounded  text-black mb-4">
      <button
        onClick={handleIsOpen}
        className={`flex justify-between items-center w-full  p-4 bg-slate-50 ${
          isOpen && "bg-blue-600 text-white"
        } rounded-md cursor-pointer transition-all duration-300`}
        type="button"
      >
        <h2>
          <span className={`${isOpen ? "text-slate-200" : "text-blue-600 "}`}>
            {index + 1}.
          </span>{" "}
          {question.title}
        </h2>
        {isOpen ? <BiMinus className="text-xl" /> : <BsPlus />}
      </button>
      {isOpen && (
        <div className="bg-slate-50 p-4 w-full rounded-br-md rounded-bl-md transition-all translate-y-100">
          <p>{question.body}</p>
        </div>
      )}
    </div>
  );
}
