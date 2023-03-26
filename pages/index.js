import Head from "next/head";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" bg-beige absolute bottom-0 right-0 top-0 left-0 min-w-screen min-h-screen pt-10 "
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "60%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="md:text-9xl ml-10 md:mt-20 text-6xl mt-20 font-myTupiBold ">
          JAMIE HUGHES
        </div>
      </m.h1>
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="md:text-6xl text-5xl font-myTupiBold ml-10"
      >
        FRONT END DEVELOPER
      </m.h1>

      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="md:text-6xl text-4xl font-myTupiBold ml-10"
      >
        UI DESIGNER
      </m.h1>

      <div className="border-b border-black ml-0 mt-10"></div>
    </m.div>
  );
}
