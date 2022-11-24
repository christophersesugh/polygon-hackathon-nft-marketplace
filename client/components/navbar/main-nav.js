import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { ConnectButton } from "web3uikit";
import { links } from ".";

export default function MainNav({ setOpenNav }) {
  return (
    <nav className="flex justify-between items-center px-6 py-8 lg:py-10 text-lg bg-blue-900">
      <div>
        <Link href="/">
          <Zoom>
            <button className="focus:outline-none">
              <Image
                src="/nft-core-white.png"
                width={300}
                height={300}
                alt="logo"
                className="-mt-[8rem] -mb-[9rem] -ml-2"
              />
            </button>
          </Zoom>
        </Link>
      </div>
      <div className="flex jutify-between items-center">
        <ul className="flex mr-2">
          {links.map((link, index) => (
            <li className="mr-6" key={`link-${index}`}>
              <Link href={link.link}>
                <Zoom>
                  <button
                    className={`transition hidden  capitalize hover:text-green-500 focus:text-green-500 focus:underline focus:outline-none text-slate-white ${
                      link.name === "about" ? "lg:block" : "md:block"
                    }`}
                  >
                    {link.name}
                  </button>
                </Zoom>
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-bold capitalize">
          <div className="hidden md:block rounded-3xl bg-slate-50 text-blue-700">
            <ConnectButton moralisAuth={false} />
          </div>

          <button className="md:hidden" onClick={() => setOpenNav(true)}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
