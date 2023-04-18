import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import styles from "../styles/nav.module.css";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pages = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
  ];

  const currentPage = pages.find((page) => page.path === router.pathname);

  return (
    <nav
      className={`font-myTupiBold md:text-2xl relative uppercase z-20 overflow-hidden bg-whitey`}
    >
      {" "}
      <div className="mx-auto flex justify-between items-center md:justify-evenly">
        <div className="hidden md:flex md:w-full">
          {pages.map((page, index) => (
            <div
              key={page.path}
              className={`flex-1 border border-black border-t-0 ${
                index !== pages.length ? "border-r-0" : ""
              }`}
            >
              <Link legacyBehavior href={page.path}>
                <a
                  className={`${styles.navLink} text-black block w-full h-full p-4`}
                >
                  {page.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden flex justify-between w-full">
          <div className="text-black font-bold bg-whitey border border-b-black w-1/2 h-15 p-3  ">
            {currentPage ? currentPage.name : "Your Brand"}
          </div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white p-3 bg-black w-1/2 flex justify-between"
          >
            MENU
            {isMenuOpen ? (
              <XIcon className="h-10 w-10 text-white" />
            ) : (
              <MenuIcon className="h-10 w-10 text-white" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden ">
          <div className="p-2 space-y-2 h-screen bg-whitey">
            {pages.map((page) => (
              <Link legacyBehavior key={page.path} href={page.path}>
                <a
                  onClick={toggleMenu}
                  className="block text-black hover:text-black py-10 bg-whitey border-black border-b"
                >
                  {page.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
