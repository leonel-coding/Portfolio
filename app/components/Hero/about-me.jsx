"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../../../public/avatar.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full flex-col flex lg:items-center items-center justify-center lg:mt-5 mt-8   rounded-xl py-6">
      <div
        className={` w-full rounded-2xl flex flex-col justify-start items-center lg:justify-start  lg:items-center gap-3 text-center`}
      >
        <div className="lg:w-1/4 w-full flex flex-col justify-center items-center px-3 py-2  rounded-lg text-center mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            <Image
              alt="Foto de mi"
              src={Avatar}
              width={130}
              className="rounded-full"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 3.8 }}
            className="text-3xl text-white font-extralight"
          >
            Leonel Rivera
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 4.2 }}
            className="text-xl font-extralight"
          >
            Software Developer
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 4.6 }}
            className="text-xs font-extralight"
          >
            México
          </motion.h4>
        </div>

        <div className="lg:w-3/4 w-full text-white text-lg">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5 }}
            className="mb-4"
          >
            Un desarrollador de software con 5 años de experiencia desarrollando soluciones
            coorporativas con tecnologías .NET . Me he desempeñado en la creación de proyectos movil, escritorio, web,
            backend para el sector industrial. Me destaco por el manejo técnico, mi orientación al uso de buenas practicas,
            y busco poder aportar en el desarrollo con impacto en el negocio por medio de soluciones efectivas. 
          </motion.p>
        </div>
        {/* <div>
          <Image
            alt="Foto de mi"
            src={Avatar}
            width={190}
            className=" rounded-full lg:block hidden"
          />
        </div> */}
      </div>
    </div>
  );
}
