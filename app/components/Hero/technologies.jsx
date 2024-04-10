"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SimpleStudios from "../../../public/projects/simple-studios.png";
import Asl from "../../../public/projects/ASL.png";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaPython, FaJava, FaReact, FaPhoenixFramework } from "react-icons/fa";
import { IoApps, IoGitNetworkSharp, IoLogoAndroid, IoLogoJavascript, IoLogoNodejs, IoLogoWindows, IoServer, IoServerOutline, IoServerSharp } from "react-icons/io5";
import { TbAccessible, TbApiApp, TbBrandCSharp, TbBrandWindows } from "react-icons/tb";
import {
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiCanva,
  SiFigma,
  SiHtml5,
  SiDotnet,
  SiDiagramsdotnet,
  SiFramework7,
  SiNetapp,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiWebassembly,
} from "react-icons/si";
import { BiExtension } from "react-icons/bi";

const Playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Technologies() {
  const techs_front = [
    {
      id: "win-forms",
      label: "WinForms",
      icon: <IoLogoWindows />,
    },
    {
      id: "ASP.NET M-V-C",
      label: "ASP.NET MVC",
      icon: <SiHtml5 />,
    },
    {
      id: "blazor-serverside",
      label: "Blazor ServerSide",
      icon: <SiWebassembly />,
    },
    {
      id: "Nodejs",
      label: "Next.js",
      icon: <IoLogoNodejs />,
    },
    {
      id: "xamarin-forms",
      label: "Xamarin",
      icon: <IoLogoAndroid />,
    },
  ];
  const frameworks = [
    {
      id: "netcore",
      label: ".NET Core",
      icon: <SiDotnet />,
    },
    {
      id: "netframework",
      label: ".NET Framework",
      icon: <SiFramework7 />,
    },
    {
      id: "net6",
      label: ".NET 6",
      icon: <SiDotnet />,
    },
  ];
  const dbs = [
    {
      id: "sqlserver",
      label: "SQL Server",
      icon: <SiMicrosoftsqlserver />,
    },
    {
      id: "sqlite",
      label: "SQLite",
      icon: <SiSqlite />,
    },

  ];
  const techs_back = [
    {
      id: "aspnetapi",
      label: "ASP.NET Web API",
      icon: <TbApiApp />,
    },
    {
      id: "ado",
      label: "ADO.NET",
      icon: <TbAccessible />,
    },
    {
      id: "dappe",
      label: "Dapper",
      icon: <BiExtension />,
    },
    {
      id: "entityFramework",
      label: "Entity Framwork",
      icon: <SiDotnet />,
    },
  ];
  return (
    <div className="w-full flex-col lg:flex-row flex lg:items-start items-start justify-center lg:justify-between gap-12 mt-16">
      <div className="">
        <aside className="w-full flex flex-col items-start justify-start lg:text-left ">
          <h2 className={`text-3xl lg:text-5xl font-bold mt-24`}>
            Tecnologías
          </h2>
          <p>Aplicadas en mis proyectos</p>
        </aside>
      </div>
      <section className="p-2 w-full flex flex-col gap-6">
        <div className={`w-full mt-8 rounded-2xl flex justify-between`}>
          <div className="w-full flex flex-col justify-start items-start  ">
            <h3 className="text-xl font-bold">Front-end</h3>
            <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
              {techs_front.map((tech) => {
                return (
                  <div
                    key={tech.id}
                    className="flex flex-col justify-center items-center p-5"
                  >
                    <h2 className="text-2xl">{tech.icon}</h2>
                    <h1 className={`text-l font-bold`}>{tech.label}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* BACK */}
        <div className={`w-full  rounded-2xl  flex justify-between`}>
          <div className="w-full flex flex-col justify-start items-start  ">
            <h3 className="text-xl font-bold">Back-end</h3>
            <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
              {techs_back.map((tech) => {
                return (
                  <div
                    key={tech.id}
                    className="flex flex-col justify-center items-center p-5"
                  >
                    <h2 className="text-2xl">{tech.icon}</h2>
                    <h1 className={`text-l font-bold`}>{tech.label}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* DATABASE */}
        <div className={`w-full  rounded-2xl  flex justify-between`}>
          <div className="w-full flex flex-col justify-start items-start  ">
            <h3 className="text-xl font-bold">Bases de datos</h3>
            <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
              {dbs.map((db) => {
                return (
                  <div
                    key={db.id}
                    className="flex flex-col justify-center items-center p-5"
                  >
                    <h2 className="text-2xl">{db.icon}</h2>
                    <h1 className={`text-l font-bold`}>{db.label}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* FRAMEWORKS */}
        <div className={`w-full rounded-2xl  flex justify-between`}>
          <div className="w-full flex flex-col justify-start items-start  ">
            <h3 className="text-xl font-bold">Frameworks</h3>
            <div className="w-full flex flex-wrap flex-row justify-start items-start gap-6">
              {frameworks.map((tech) => {
                return (
                  <div
                    key={tech.id}
                    className="flex flex-col justify-center items-center p-5"
                  >
                    <h2 className="text-2xl">{tech.icon}</h2>
                    <h1 className={`text-l font-bold`}>{tech.label}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
