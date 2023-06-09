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
        className=" bg-whitey absolute top-0 left-0 bottom-0 right-0  min-w-screen min-h-screen overflow-auto"
      >
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "60%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="md:text-9xl md:ml-10 ml-5 mt-20 text-6xl font-myTupiBold "></div>
        </m.h1>{" "}
        <div className="container md:mt-10 mx-auto ">
          <div className="w-full flex flex-col md:flex-row mr-5   ">
            <RevealImageLeft
              className="w-1/3"
              src="./netflix.png"
              alt="Project 1"
            />
            <div className="w-full md:w-1/2 md:mt-0 md:ml-5 uppercase text-right">
              <h2 className="text-2xl md:font-bold mr-1 md:mr-0 md:border md:border-black md:border-b-0 p-3  ">
                NETFLIX CLONE
              </h2>
              <p className="mr-1 md:mr-0 border border-b-black md:border-black md:border-t-0 p-3">
                A fullstack netflix clone which was built using redux,
                firestore, stripe checkout and google auth, Sign up by clicking
                the sign up button instead of the sign in with your username and
                password filled in
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://netflix-clone-106b0.web.app"
                  target="_blank"
                >
                  live
                </a>
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://github.com/jamiehughes5926/netflix-clone-fixed-"
                >
                  github
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row-reverse  md:mt-10 ">
            <RevealImageRight src="./iphone.jpeg" alt="Project 2" />
            <div className="w-full md:w-1/2  md:mt-0 md:mr-5 uppercase md:text-left  ">
              <h2 className="text-2xl md:font-bold ml-1 md:ml-0 md:border md:border-black md:border-b-0 p-3">
                Iphone 14 Landing page
              </h2>
              <p className="ml-1 md:ml-0 border border-b-black md:border-black md:border-t-0 p-3">
                A landing page based on the apple website built with react,
                Three.js using WebGi and GSAP
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://main--jazzy-cranachan-04f16f.netlify.app/"
                  target="_blank"
                >
                  live
                </a>
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://github.com/jamiehughes5926/iphone-3js"
                >
                  github
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row mr-5   ">
            <RevealImageLeft
              className="w-1/3"
              src="./gym.png"
              alt="Project 1"
            />
            <div className="w-full md:w-1/2 md:mt-0 md:ml-5 uppercase text-right">
              <h2 className="text-2xl md:font-bold mr-1 md:mr-0 md:border md:border-black md:border-b-0 p-3  ">
                GYM WESBITE
              </h2>
              <p className="mr-1 md:mr-0 border border-b-black md:border-black md:border-t-0 p-3">
                A gym website mock up using react, vite, tailwindcss and framer
                motion
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://main--glistening-seahorse-0072be.netlify.app/"
                  target="_blank"
                >
                  live
                </a>
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://github.com/jamiehughes5926/gym-vite"
                >
                  github
                </a>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row-reverse mr-5 ">
            <RevealImageRight src="./palette.jpeg" alt="Project 1" />
            <div className="w-full md:w-1/2   md:mt-0 md:mr-5 uppercase text-right md:text-right  ">
              <h2 className="text-2xl md:font-bold mr-1 md:mr-0 md:border md:border-black md:border-b-0 p-3">
                IMAGE PALETTE GENERATOR
              </h2>
              <p className="mr-1 md:mr-0 border border-b-black md:border-black md:border-t-0 p-3">
                A Palette Generator that takes an image and creates a palette
                for the image, created using NEXT JS, css and the colorthief
                package
                <br></br>
                <a
                  className="font-myTupiBold"
                  href="https://main--rad-heliotrope-6f0d46.netlify.app/"
                  target="_blank"
                >
                  live
                </a>
                <br />
                <a
                  className="font-myTupiBold"
                  href="https://github.com/jamiehughes5926/palette-gen"
                >
                  github
                </a>
              </p>
            </div>
          </div>

          {/* Add more projects as needed */}
        </div>
      </m.div>
    </div>
  );
}
