import Head from "next/head";
import { motion as m } from "framer-motion";
import React, { useEffect } from "react";
import Navbar from "@/components/navBar";

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
        className="bg-beige absolute bottom-0 right-0 top-0 left-0 min-w-screen min-h-screen "
      >
        <Navbar className="mt-0 p-0" />
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <div className="overflow-auto h-full">
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "60%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="md:text-9xl ml-5 md:ml-10 md:mt-20 text-6xl mt-10  font-myTupiBold">
              JAMIE HUGHES
            </div>
          </m.h1>
          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-6xl ml-5 text-5xl font-myTupiBold md:ml-10"
          >
            FRONT END DEVELOPER
          </m.h1>

          <m.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-6xl ml-5 text-4xl font-myTupiBold md:ml-10"
          >
            UI DESIGNER
          </m.h1>

          <div className="border-b border-black ml-0 mt-10"></div>
          <div className="container px-4">
            <div className="flex flex-col md:flex-row">
              {/* About Section */}
              <div className="w-full md:w-1/2 p-4">
                <h2 className="text-4xl font-bold mb-4">ABOUT:</h2>
                <p className="font-myTupiBold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
              </div>

              {/* Skills Section */}
              <div className="w-full md:w-1/2 p-4 ">
                <h2 className="text-4xl font-myTupiBold mb-4 uppercase">
                  Skills:
                </h2>
                <ul className="text-2xl font-myTupiBold uppercase mb-20">
                  <li className="mb-2">* REACT</li>
                  <li className="mb-2">* NEXTJS</li>
                  <li className="mb-2">* AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
