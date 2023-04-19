import Head from "next/head";
import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import ScrollingBanner from "@/components/ScrollingBanner";
import styles from "../styles/Home.module.css";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home({ setNavBgColor }) {
  useEffect(() => {
    if (setNavBgColor) {
      setNavBgColor("beige");
    }
  }, [setNavBgColor]);
  return (
    <div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="bg-whitey absolute bottom-0 right-0 top-0 left-0 min-w-screen min-h-screen "
      >
        <Head>
          <title>Jamie Hughes</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <div className="overflow-auto h-full">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "60%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div
              data-text="JAMIE HUGHES"
              className="glitch md:text-9xl ml-5 md:ml-10 md:mt-20 md:p-0 text-6xl mt-20 font-myTupiBold"
            >
              JAMIE HUGHES
            </div>
          </m.h1>
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-6xl ml-5 text-5xl font-myTupiBold md:ml-0"
          >
            <ScrollingBanner text="FRONT END DEV * FRONT" speed={1.5} />
          </m.h1>
          <div className="border-b border-black ml-0 mt-5"></div>
          <div className="w-full px-4 mb-10">
            <div className="flex flex-col md:flex-row mt-10">
              {/* About Section */}
              <div className="w-full md:w-1/2 p-4 border border-black md:mr-5 md:mb-0 mb-10 bg-myBlue ">
                <h2 className="text-4xl font-bold mb-4">ABOUT</h2>
                <p className="font-myTupi uppercase">
                  Hi, I am a Front-End Developer, Currently studying a Bachelor
                  of Science majoring in Computer Science at Massey University,
                  finishing in 2023.
                  <br></br>
                  <br></br>I Have previously freelanced using upwork developing
                  websites and webapps along with creating websites for local
                  brands.
                  <br></br>
                  <br></br>I use React to develop my websites and have strong
                  knowledge in HTML, CSS and javascript
                </p>
              </div>
              {/* Skills Section */}
              <div className="w-full md:w-1/2 p-4 border bg-myPurple border-black md:ml-5">
                <h2 className="text-4xl font-myTupiBold mb-4 uppercase">
                  FRONT END:
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul className="list-disc">
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        REACT
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span> HTML
                        + CSS
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        JAVASCRIPT
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span> NEXT
                        JS
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        GREENSOCK (GSAP)
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        FRAMER MOTION
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc">
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        TAILWIND CSS
                      </li>
                      <li>
                        <span className="font-myTupiBold text-2xl">*</span>{" "}
                        REDUX
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 mb-10">
            <div className="flex flex-col md:flex-row">
              {/* About Section */}
              <div className="w-full md:w-1/2 p-4 border border-black md:mr-5 md:mb-0 mb-10 bg-myGreen">
                <h2 className="text-4xl font-bold mb-4">BACK END:</h2>
                <ul className="list-disc">
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> NODE JS
                  </li>
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> FIREBASE
                  </li>
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> AWS
                  </li>
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> GRAPH QL
                  </li>
                </ul>
              </div>
              {/* Skills Section */}
              <div className="w-full md:w-1/2 p-4 border bg-myYellow border-black md:ml-5">
                <h2 className="text-4xl font-myTupiBold mb-4 uppercase">
                  TOOLS:
                </h2>
                <ul className="list-disc">
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> NPM
                  </li>
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> GITHUB
                  </li>
                  <li>
                    <span className="font-myTupiBold text-2xl">*</span> FIGMA
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 ">
            <div class="flex  ">
              <div className="bg-honeydew w-2/3 text-center border border-black ">
                <div className="text-4xl uppercase font-myTupiBold mt-5 text-left ml-5">
                  Contact:
                </div>
                <div>
                  <input
                    className="bg-transparent w-full m-5  mr-10 ml-5  font-myTupi uppercase focus:outline-none focus:border-none"
                    placeholder="Your Name"
                  ></input>
                  <div className="border border-b border-black mr-10 ml-5"></div>
                  <input
                    className="uppercase bg-transparent w-full m-5  mr-10 ml-5 focus:outline-none focus:border-none"
                    placeholder="you@company.com"
                  ></input>
                  <div className="border border-b border-black mr-10 ml-5"></div>
                  <input
                    className="uppercase bg-transparent w-full m-5  mr-10 ml-5 focus:outline-none focus:border-none"
                    placeholder="Tell me more!"
                  ></input>
                  <div className="border border-b border-black mr-10 ml-5 mb-10"></div>
                  <button className="bg-black w-4/5 uppercase text-white font-myTupiBold mb-5 p-2">
                    Get in Touch
                  </button>
                </div>
              </div>
              <div className="w-1/3 ml-10 border border-black bg-ivory">
                <div className="m-5 text-2xl md:text-4xl uppercase font-myTupiBold mt-5">
                  LINK:
                </div>
                <div>
                  <ul className="ml-1">
                    <li>
                      <span className="md:ml-5 font-myTupiBold text-2xl">
                        *
                      </span>
                      <a
                        href="https://github.com/jamiehughes5926"
                        target="_blank"
                        className="text-base md:text-2xl font-myTupiBold underline"
                      >
                        GITHUB
                      </a>
                    </li>
                    <li>
                      <span className="md:ml-5 font-myTupiBold text-2xl">
                        *
                      </span>
                      <a
                        href="https://main--thriving-faloodeh-f8e502.netlify.app/"
                        target="_blank"
                        className="text-base md:text-2xl font-myTupiBold underline"
                      >
                        OLD PORTFOLIO
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
