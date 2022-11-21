import React from "react";
import Image from "next/image";

export default function Feature({ feature }) {
  return (
    <div className="rounded-md bg-white flex flex-col justify-center items-center p-8 drop-shadow-lg w-full hover:outline hover:outline-blue-500 focus:outline focus:outline-blue-500 transition-hover">
      <div>
        <Image
          src={feature.image}
          width={150}
          height={150}
          alt={feature.title}
          className="pt-8"
        />
      </div>
      <div>
        <h1 className="text-2xl text-blue-900 my-6 capitalize text-center">
          {feature.title}
        </h1>
        <p className="text-slate-500 w-auto text-center">{feature.body}</p>
      </div>
    </div>
  );
}
