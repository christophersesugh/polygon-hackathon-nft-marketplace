import Link from "next/link";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { links } from ".";

export default function SideNav({ openNav, setOpenNav } = {}) {
  const handleSideNav = () => {
    setOpenNav(false);
  };
  return (
    <>
      {openNav ? (
        <nav className="transition-transform duration-300 max-w-sm w-[300px] fixed right-0 top-0 p-4 flex flex-col items-start justify-start h-full bg-blue-900 md:hidden origin-right z-10">
          <button
            className="self-end mr-2 border-2 px-2 text-xl text-slate-200 border-red-700 rounded"
            onClick={() => setOpenNav(false)}
          >
            &times;
          </button>
          <ul className="m-8">
            {links.map((link, index) => (
              <li
                key={`link-${index}`}
                className="mb-8 text-xl text-slate-200 hover:text-slate-300"
              >
                <Link href={link.link}>
                  <button className="transition capitalize flex items-center">
                    <span className="mr-2"> {link.icon}</span> {link.name}
                  </button>
                </Link>
              </li>
            ))}
            <li className="mb-4 text-xl text-slate-200 hover:text-slate-300">
              <button>
                <MdOutlineLogout className="inline mr-2" />
                sign out
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
