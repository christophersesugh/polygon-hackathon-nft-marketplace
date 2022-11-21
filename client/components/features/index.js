import React from "react";
import SectionTitle from "../section-title";
import Feature from "./feature";
import image1 from "/public/assets/logos/feature-icon-1.png";
import image2 from "/public/assets/logos/feature-icon-2.png";
import image3 from "/public/assets/logos/nft-coin.png";

export default function Features() {
  return (
    <section className="bg-slate-50 flex flex-col items-center justify-center py-12 lg:pb-[6rem]  px-8 h-auto">
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
    image: image1,
    title: "Instant transactions",
    body: "We provide up to 99% network uptime to enable fast and instant transactions.",
  },
  {
    image: image2,
    title: "Safe & Secure",
    body: "All your activities on this platform are safe and secured, including transactions.",
  },
  {
    image: image3,
    title: "NFT Minting",
    body: "Mint, list, and sell or buy your NFTs at ease.",
  },
];
