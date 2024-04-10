"use client";

import React from "react";
// import ThemeSwitcher from "./switch";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Navbar() {
  const socials = [
    {
      id: "github",
      icon: <AiOutlineGithub />,
      link: "https://github.com/leonel-coding",
    },
    {
      id: "linkedin",
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/leonel-coding/",
    },
  ];
  // console.log(pathname);
  return (
    <div className="w-full flex justify-center items-center  top-6 overflow-visible z-50 backdrop-blur-sm mt-3">
      <nav className="w-[1000px] flex flex-row justify-between items-center px-3 lg:px-0 ">
        <div className="flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 6 }}
            className="w-full flex gap-3 text-2xl items-center lg:justify-start"
          >
            {socials.map((social) => {
              return (
                <Link
                  key={social.id}
                  href={social.link}
                  target="__blank"
                  className="hover:text-blue-400 duration-200"
                >
                  {social.icon}
                </Link>
              );
            })}
          </motion.div>
          {/* <ThemeSwitcher /> */}
        </div>

        {/* <div className="lg:hidden block">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 bg-transparent hover:bg-transparent border-none text-xl"
            >
              <AiOutlineMenu />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-md font-light hover:text-yellow-950 rounded-lg duration-100"
                  >
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div> */}
      </nav>
    </div>
  );
}
