import React from "react";
import SectionTitle from "../section-title";
import Member from "./member";

export default function Team() {
  return (
    <section className="bg-slate-50 flex flex-col py-14 md:pb-[10rem]">
      <SectionTitle title="Expert Team" subtitle=" Meet Our Team." />

      <div className="sm:columns-2 gap-8 md:columns-4  ">
        {members.map((member, index) => (
          <Member member={member} key={`member-${index}`} />
        ))}
      </div>
    </section>
  );
}

const members = [
  { name: "Christopher Sesugh", position: "CEO, Founder, & Developer" },
  { name: "Samuel Ochaba", position: "Developer" },
  { name: "Kingsley Ogwuta", position: "Designer" },
  { name: "Dominion Chukwu", position: "Analyst" },
];
