import React from "react";
import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-indigo-900 divide-y px-4">
      <Fade top>
        <div className="grid g sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 pb-8 items-start">
          <div className="p-4 -mt-24">
            <Image
              src="/nft-core-white.png"
              width={250}
              height={350}
              alt="Logo"
              className="-mb-8"
            />
            <p>
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <h2 className="text-md text-bold mt-4">Follow Us On:</h2>
            <div className="flex gap-4 mt-4 text-xl">
              {social.map((item, index) => (
                <Link href={item.link} key={index}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg underline">Support</h2>
            {support.map((item, index) => (
              <p
                key={`item-${index}`}
                className={`capitalize mb-4 ${index === 0 ? "mt-4" : ""}`}
              >
                <Link href={item.link}>{item.name}</Link>
              </p>
            ))}
          </div>

          <div className="p-4">
            <h2 className="text-lg underline">Solution</h2>
            {solutions.map((item, index) => (
              <p
                key={`item-${index}`}
                className={`capitalize mb-4 ${index === 0 ? "mt-4" : ""}`}
              >
                <Link href={item.link}>{item.name}</Link>
              </p>
            ))}
          </div>

          <div className="p-4">
            <h2 className="text-lg underline">Subscribe</h2>
            <p className="my-10">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 w-full">
              <div className="relative">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full rounded bg-indigo-700 p-2 outline-none border-none focus:bg-indigo-600"
                />

                <button className="absolute right-0 p-2 bg-indigo-500 rounded-tr rounded-br">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="grid sm:grid-cols-2 md:flex  items-center justify-between py-8">
          <div>
            <p>&copy; {date} NFTCore - All Rights Reserved.</p>
          </div>
          <div>
            <p>Designed and Developed by Christopher Sesugh.</p>
          </div>
        </div>
      </Fade>
    </footer>
  );
}

const solutions = [
  {
    name: "NFT Minting",
    link: "/#faqs",
  },
  {
    name: "Proceeds withdrawal",
    link: "/#faqs",
  },
  {
    name: "Buy NFTs",
    link: "/#faqs",
  },
];

const support = [
  {
    name: "faqs",
    link: "/#faqs",
  },
  {
    name: "onboarding",
    link: "/#onboarding",
  },
  {
    name: "about",
    link: "/#about",
  },
];

const social = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/christopher-sesugh-265332176",
  },
  { icon: <BsGithub />, link: "https://github.com/christophersesugh" },
  { icon: <BsTwitter />, link: "https://twitter.com/chrisesugh" },
];
