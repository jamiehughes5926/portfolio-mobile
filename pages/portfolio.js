import Head from "next/head";
import { motion as m } from "framer-motion";
import React, { useEffect } from "react";
import RevealImage from "@/components/imageReveal";
import { photo1 } from "../public/1.webp";
import Navbar from "@/components/navBar";
import RevealImageLeft from "@/components/revealImageLeft";
import RevealImageRight from "@/components/revealImageRight";

export default function portfolio({}) {
  return (
    <div className="overflow-auto h-full">
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className=" bg-honeydew absolute top-0 left-0 bottom-0 right-0  min-w-screen min-h-screen overflow-auto"
      >
        <Navbar />{" "}
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "60%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="md:text-9xl md:ml-10 ml-5 md:mt-20 text-6xl mt-10 font-myTupiBold ">
            PORTFOLIO{" "}
          </div>
          <div className="border-b border-black mt-10 mb-7"></div>
        </m.h1>{" "}
        <div className="container md:mt-10 mx-auto">
          <div className="flex flex-col items-center mr-5">
            <div className="w-full flex flex-col md:flex-row uppercase ">
              <RevealImageLeft src="./1.webp" alt="Project 1" />
              <div className="w-full md:w-1/2   md:mt-0 md:ml-5 text-right md:text-right ">
                <h2 className="text-2xl font-bold md:">Project 1 Title</h2>
                <p className="hidden md:block">
                  A short description of your project goes here. This can
                  include some details about the project, the technologies used,
                  or the purpose of the project.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse  md:mt-10 ml-5 ">
              <RevealImageRight src="./1.webp" alt="Project 2" />
              <div className="w-full md:w-1/2  md:mt-0 md:mr-5 uppercase md:text-left ">
                <h2 className="text-2xl md:font-bold">Project 2 Title</h2>
                <p className="hidden md:block">
                  A short description of your project goes here. This can
                  include some details about the project, the technologies used,
                  or the purpose of the project.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row mr-5 ">
              <RevealImageLeft src="./1.webp" alt="Project 1" />
              <div className="w-full md:w-1/2   md:mt-0 md:ml-5 uppercase text-right md:text-right ">
                <h2 className="text-2xl md:font-bold  ">Project 3 Title</h2>
                <p className="hidden md:block">
                  A short description of your project goes here. This can
                  include some details about the project, the technologies used,
                  or the purpose of the project.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse  md:mt-10 ml-5">
              <RevealImageRight src="./1.webp" alt="Project 2" />
              <div className="w-full md:w-1/2 mt-5 md:mt-0 md:mr-5 uppercase md:text-left  ">
                <h2 className="text-2xl md:font-bold ">Project 4 Title</h2>
                <p className="hidden md:block">
                  A short description of your project goes here. This can
                  include some details about the project, the technologies used,
                  or the purpose of the project.
                </p>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </m.div>
    </div>
  );
}
