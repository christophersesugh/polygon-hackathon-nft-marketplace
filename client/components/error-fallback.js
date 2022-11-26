import React from "react";
import { IoMdRefresh } from "react-icons/io";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-200 p-8">
      <h1 className="text-red-500 mb-8 text-lg max-w-3xl">{error.message}</h1>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-700 text-slate-100 uppercase px-4 py-2 rounded text-xl flex items-center"
      >
        <IoMdRefresh className="inline text-slate-100" />
        refresh
      </button>
    </div>
  );
}
