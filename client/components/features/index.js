import React from "react";
import SectionTitle from "../section-title";
import Feature from "./feature";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 flex flex-col items-center justify-center py-12 lg:pb-[6rem]  px-8 h-auto"
    >
      <SectionTitle
        title="Why Choose Us"
        subtitle="Our Features"
        titleBody="There are many variations of passages of Lorem Ipsum available."
      />
      <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap w-full">
        {features.map((feature, index) => (
          <Feature feature={feature} key={`feature-${index}`} />
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    image: "/feature-icon-1.png",
    title: "Instant transactions",
    body: "We provide up to 99% network uptime to enable fast and instant transactions.",
  },
  {
    image: "/feature-icon-2.png",
    title: "Safe & Secure",
    body: "All your activities on this platform are safe and secured, including transactions.",
  },
  {
    image: "/nft-coin.png",
    title: "NFT Minting",
    body: "Mint, list, and sell or buy your NFTs at ease.",
  },
];
