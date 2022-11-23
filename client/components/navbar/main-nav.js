import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Zoom from "react-reveal/Zoom";
import { links } from ".";

export default function MainNav({ setOpenNav }) {
  return (
    <nav className="flex justify-between items-center px-6 py-8 lg:py-10 text-lg bg-blue-900">
      <Zoom>
        <div>
          <Link href="/">
            <button className="focus:outline-none">
              <Image
                src="/assets/logos/nft-core-white.png"
                width={300}
                height={300}
                alt="logo"
                className="-mt-[8rem] -mb-[9rem] -ml-2"
              />
            </button>
          </Link>
        </div>
        <div className="flex jutify-between">
          <ul className="flex mr-6">
            {links.map((link, index) => (
              <li className="mr-8" key={`link-${index}`}>
                <Link href={link.link}>
                  <button className="transition hidden md:block capitalize hover:text-green-500 focus:text-green-500 focus:underline focus:outline-none text-slate-white">
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-bold capitalize flex items-center">
            <div className="hidden md:block">
              <button>
                <MdOutlineLogout className="inline mr-2" />
                sign out
              </button>
            </div>
            <button className="md:hidden" onClick={() => setOpenNav(true)}>
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </Zoom>
    </nav>
  );
}
