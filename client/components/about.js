import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import SectionTitle from "./section-title";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-white h-screen pb-8"
    >
      <SectionTitle subtitle="About NFTCore" />
      <div className="flex items-center">
        <Slide left>
          <div className="pl-10 flex items-center justify-center">
            <Image
              src="/assets/logos/about-image.png"
              width={400}
              height={400}
              className="w-[70%] hidden lg:block"
              alt="About image"
            />
          </div>
        </Slide>
        <Slide right>
          <div className="pr-10 flex-1">
            <SectionTitle
              title="Decentralized NFT Marketplace"
              subtitle="Secure and reliable marketplace to buy and sell NFTs."
              titleBody="Mint, list, sell, and buy NFTs with gas minimizations and no interruptions."
            />
          </div>
        </Slide>
      </div>
    </section>
  );
}
