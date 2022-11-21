import React from "react";
import Image from "next/image";
import headerImg from "/public/assets/logos/header.png";
import headerImg2 from "/public/assets/logos/nft-coin.png";
import headerImg3 from "/public/assets/logos/ethereum.png";
import headerImg4 from "/public/assets/logos/bitcoin.png";

export default function Header() {
  return (
    <header className="bg-[url('/assets/logos/hero-shape.svg')] bg-contain bg-no-repeat bg-center bg-indigo-900 bg-origin-content h-auto">
      <div className="flex flex-col md:flex-row items-center justify-between p-12 pt-12">
        <div className="flex items-center justify-center flex-col p-20">
          <p>Full NFT and Crypto collectibles Marketplace.</p>
          <h2 className="text-3xl my-8 font-[10rem]">
            Mint, List, Sell or Buy NFTs.
          </h2>
          <p>Your trusted NFT Marketplace.</p>
          <button
            type="button"
            className="bg-blue-500 p-4 rounded-3xl text-lg mt-8"
          >
            Mint and List
          </button>
        </div>
        <div className="hidden md:block relative h-full flex items-center mr-20">
          <Image src={headerImg} alt="hero" className="z-2" />
          <Image
            src={headerImg3}
            width={100}
            height={100}
            alt="Ethereum"
            className="absolute animate-bounce right-0 bottom-[40%]"
          />
          <Image
            src={headerImg2}
            width={150}
            height={150}
            alt="NFT"
            className="absolute animate-ping duration-300 top-[20%] right-[35%]"
          />
        </div>
      </div>
    </header>
  );
}
