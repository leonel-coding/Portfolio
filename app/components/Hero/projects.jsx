"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SimpleStudios from "../../../public/projects/simple-studios.png";
import MT from "../../../public/projects/MT.png";
const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Projects() {
  const projects = [
    {
      id: "MT",
      label: "Mantenimiento",
      description:
        "Próximamente",
      date: "Abril 2024",
      image: MT,
      link: "#",
      gradientShadow: " shadow-blue-900 shadow-lg shadow-blue-950/50",
    },
  ];

  return (
    <section className="w-full flex-col flex lg:items-center items-center justify-center mt-32 p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-9">
        <div className="w-full flex flex-col justify-start items-start gap-9">
          {projects.map((project) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-full flex justify-center items-center rounded-lg lg:py-3 lg:px-5 text-white"
                key={project.id}
              >
                <div>
                  <p className="text-sm font-light">{project.date}</p>
                  <h2 className="text-2xl font-bold">{project.label}</h2>

                  <Image
                    alt={project.id}
                    src={project.image}
                    className={`m-1 lg:m-3 rounded-2xl ${project.gradientShadow} `}
                  />

                  {project.link ? (
                    <Link
                      href={project.link}
                      target="__blank"
                      className="text-blue-500 inline-flex items-center mt-3"
                    >
                      Visitar{" "}
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <button disabled className="inline-flex text-gray-400">
                      En proceso
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
