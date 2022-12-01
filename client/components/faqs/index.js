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
          <Accordion question={question} key={question.body} index={index} />
        ))}
      </div>
    </section>
  );
}

const questions = [
  {
    title: "How can I mint NFTs?",
    body: "After connecting your wallet, naviagte to `sell NFTs` page to mint and list your NFTs.",
  },
  {
    title: "How can I list NFTs?",
    body: "After minting your NFTs, they are automatically listed.",
  },
  {
    title: "How can I buy NFTs?",
    body: "After connecting your wallet, navigate to `buy NFTs page` to buy.",
  },
  {
    title: "How can I withdraw my proceeds (funds)?",
    body: "Naviagte to `sell NFTs`, there you can see your proceeds at the bottom. If any proceeds, you can go ahead and withdraw.",
  },
  {
    title: "What Crypto wallets are supported?",
    body: "Any crypto wallet is surpoorted.",
  },
  {
    title: "Do I need a Crypto account to Mint, List, and Sell NFTs?",
    body: "Yes, you do need a crypto account to perform those actions.",
  },
  {
    title: "How can I create a crypto account?",
    body: "You can create a crypto account using metamask or any crypto wallet of your choice.",
  },
  {
    title: "How can I update my listed NFTs?",
    body: "Simply click on NFTs owned by you and a modal will pop up for you to update your NFT lisitng.",
  },
  {
    title: "How can I connect my Crypto wallet?",
    body: "Click on the `connect` button and your wallet will pop up for you to connect.",
  },
  {
    title: "What Crypto currencies can I use to purchase NFTs?",
    body: "Ethereum and polygon can be used to purchase NFTs.",
  },
];
