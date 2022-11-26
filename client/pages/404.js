import React from "react";
import Link from "next/link";
import AppHead from "../components/app-head";

export default function NotFound() {
  return (
    <>
      <AppHead title="NFTCore | Error" />
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-about bg-contain bg-center bg-no-repeat bg-slate-300">
        <h1 className="text-blue-900 mb-8 text-[8rem]">404</h1>
        <h2 className="text-blue-900 mb-8 text-2xl capitalize">
          oops! it's a dead end.
        </h2>
        <p className="text-xl text-blue-900 capitalize mb-8">page not found</p>

        <Link href="/">
          <button className="bg-blue-700 text-slate-100 uppercase px-4 py-2 rounded text-xl">
            home
          </button>
        </Link>
      </div>
    </>
  );
}
