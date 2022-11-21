import React from "react";
import SectionTitle from "../section-title";
import Accordion from "./accordion";

export default function FAQS() {
  return (
    <section className="py-12 bg-slate-200  flex flex-col px-4">
      <SectionTitle
        title="FAQs"
        subtitle="Frequently Asked Questions."
        titleBody="Below are the answers to some frequently asked questions."
      />
      <div className="columns-1 gap-8 md:columns-2 mx-14 sm:mx-8 md:mx-8 ">
        {questions.map((question, index) => (
          <Accordion question={question} key={index} />
        ))}
      </div>
    </section>
  );
}

const questions = [
  { title: "some", body: "thing" },
  { title: "some", body: "thing" },
  { title: "some", body: "thing" },
  { title: "some", body: "thing" },
];
