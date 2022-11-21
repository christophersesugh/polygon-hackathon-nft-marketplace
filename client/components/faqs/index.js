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
          <Accordion question={question} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

const questions = [
  { title: "How can I mint NFTs?", body: "thing" },
  { title: "How can I list NFTs?", body: "thing" },
  { title: "How can I buy NFTs?", body: "thing" },
  { title: "How can I withdraw my proceeds (funds)?", body: "thing" },
  { title: "What Crypto wallets are supported?", body: "thing" },
  {
    title: "Do I need a Crypto account to Mint, List, and Sell NFTs?",
    body: "thing",
  },
  {
    title: "How can I cancel my listed NFTs?",
    body: "thing",
  },
  {
    title: "How can I update my listed NFTs?",
    body: "thing",
  },
  {
    title: "How can I connect my Crypto wallet?",
    body: "thing",
  },
  {
    title: "What Crypto currencies can I use to purchase NFTs?",
    body: "thing",
  },
];
