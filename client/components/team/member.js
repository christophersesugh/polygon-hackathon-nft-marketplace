import React from "react";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

export default function Team({ member }) {
  return (
    <Zoom>
      <div className="flex flex-col items-center justify-center mx-4 mb-12 lg:mb-0">
        <div className="rounded-full  overflow-hidden outline outline-offset-8 outline-slate-200 w-[150px] mb-6 ">
          <Image
            src="/avatar.webp"
            alt={`name`}
            height={100}
            width={100}
            className="w-full rounded-full"
          />
        </div>
        <h2 className="text-xl text-blue-800">{member.name}</h2>
        <p className="text-slate-500 text-sm">{member.position}</p>
      </div>
    </Zoom>
  );
}
