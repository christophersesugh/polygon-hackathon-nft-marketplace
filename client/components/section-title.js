import React from "react";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

export default function SectionTitle({
  title = "",
  subtitle = "",
  titleBody = "",
}) {
  return (
    <>
      <Zoom>
        <h1 className="text-xl mt-12 self-center text-blue-400">{title}</h1>
        <h2 className="text-3xl my-4 self-center text-blue-800 text-bold">
          {subtitle}
        </h2>
      </Zoom>
      <Slide bottom>
        <p className="text-lg my-12 self-center text-slate-400">{titleBody}</p>
      </Slide>
    </>
  );
}
