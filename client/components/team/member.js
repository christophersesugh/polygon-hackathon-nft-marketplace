import React from "react";
import Image from "next/image";
import image from "/public/assets/images/avatar.webp";
// import logo from "/public/assets/logos/nft-core-white.png";

export default function Team({ member }) {
  return (
    <div className="flex flex-col items-center justify-center mx-4 mb-12 lg:mb-0">
      <div className="rounded-full  overflow-hidden outline outline-offset-8 outline-slate-200 w-[150px] mb-6 ">
        <Image
          src={image}
          alt={`name`}
          height={100}
          width={100}
          className="w-full rounded-full"
        />
      </div>
      <h2 className="text-xl text-blue-800">{member.name}</h2>
      <p className="text-slate-500 text-sm">{member.position}</p>
    </div>
  );
}
