import React from "react";

export default function SectionTitle({
  title = "",
  subtitle = "",
  titleBody = "",
}) {
  return (
    <>
      <h1 className="text-xl mt-12 self-center text-blue-400">{title}</h1>
      <h2 className="text-3xl my-4 self-center text-blue-800 text-bold">
        {subtitle}
      </h2>
      <p className="text-lg my-12 self-center text-slate-400">{titleBody}</p>
    </>
  );
}
