import React from "react";
import { FaBookmark, FaStar } from "react-icons/fa";
import { MdOutlineFeaturedPlayList, MdOutlineSell } from "react-icons/md";
import MainNav from "./main-nav";
import SideNav from "./side-nav";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <>
      <MainNav setOpenNav={setOpenNav} />
      <SideNav openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
}

export const links = [
  {
    icon: <MdOutlineSell />,
    name: "Marketplace",
    link: "/market",
  },
  {
    icon: <MdOutlineSell />,
    name: "sell NFTs",
    link: "/sell-nfts",
  },
  {
    icon: <FaBookmark />,
    name: "about",
    link: "/#about",
  },
  // {
  //   icon: <MdOutlineFeaturedPlayList />,
  //   name: "features",
  //   link: "/#features",
  // },
];
