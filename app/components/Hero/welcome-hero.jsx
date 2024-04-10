"use client";

import React from "react";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import blurr from "../../../public/blurr.svg";
export default function WelcomeHero() {
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-center items-center py-2 mt-16 mb-12 z-10"
      id="home"
    >
      <div className="lg:w-full text-left  px-1">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:text-4xl text-2xl font-extralight "
        >
          "Un código que se lee como páginas de libro;
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="lg:text-5xl text-3xl font-semibold text-white mt-1"
        >
        Garantiza <span className="textGradient">un software</span> que cuenta su propia historia."
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="lg:text-3xl text-xl font-light mt-3"
        >
          - Anónimo
        </motion.p>
        {/* <p className="lg:text-3xl text-xl font-light mt-3">
          Web-Developer <span className="text-blue-500">&</span> Copywriter
        </p> */}
      </div>
    </div>
  );
}
