import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header
      className={`bg-[url("/assets/logos/hero.jpeg")] bg-cover bg-no-repeat bg-center bg-indigo-900 bg-origin-content h-screen`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between lg:p-12 pt-12">
        <Slide left>
          <div className="flex  justify-center flex-col p-8 lg:p-20">
            <Fade top>
              <p>Full NFT and Crypto collectibles Marketplace.</p>
              <h2 className="text-[2rem] my-8 font-[10rem]">
                Mint, List, Sell and, Buy NFTs.
              </h2>
              <p>Your trusted NFT Marketplace.</p>
            </Fade>
            <Fade bottom>
              <Link href="/sell-nfts">
                <button
                  type="button"
                  className="bg-blue-500 p-4 rounded-3xl text-lg mt-8 self-start animate-pulse duration-300"
                >
                  Mint and List
                </button>
              </Link>
            </Fade>
          </div>
        </Slide>
        <Slide right>
          <div className="hidden md:block relative h-full flex items-center mr-20">
            <Image
              src="/header.png"
              width={450}
              height={500}
              alt="hero"
              className="z-2"
            />
            <Image
              src="/ethereum.png"
              width={100}
              height={100}
              alt="Ethereum"
              className="absolute animate-bounce right-0 bottom-[40%]"
            />
            <Image
              src="/nft-coin.png"
              width={150}
              height={150}
              alt="NFT"
              className="absolute animate-ping duration-300 top-[20%] right-[35%]"
            />
          </div>
        </Slide>
      </div>
    </header>
  );
}
