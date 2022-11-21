import React from "react";
import SectionTitle from "../section-title";
import Step from "./step";

export default function Onboarding() {
  return (
    <section className="bg-slate-200 flex flex-col items-center justify-center py-12 lg:pb-[10rem]  px-8">
      <SectionTitle
        title="Ready To Get Started?"
        subtitle="3 Steps To Start."
        titleBody="Below are three (3) steps to get you started!"
      />

      <div className="flex flex-col gap-14 md:flex-row">
        {steps.map((step, index) => (
          <Step key={`step-${index}`} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    title: "connect your wallet.",
    body: "Connect your meta mask, polygon, or any other supported crypto wallet of your choice.",
  },
  {
    title: "Mint & list, or buy.",
    body: "Mint and list your NFT on the marketplace or buy an already listed NFT.",
  },
  {
    title: "Withdraw proceeds.",
    body: "You can withdraw your proceeds at any moment, and your transaction will be instant.",
  },
];
