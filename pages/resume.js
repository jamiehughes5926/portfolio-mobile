import Head from "next/head";
import { motion as m } from "framer-motion";

export default function resume() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className=" bg-myPurple absolute top-0 left-0 bottom-0 right-0  min-w-screen min-h-screen pt-10"
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
        <div className="md:text-9xl md:ml-10 md:mt-20 text-7xl mt-20 font-myTupiBold ">
          RESUME{" "}
        </div>
        <div className="border-b border-black mt-10"></div>
      </m.h1>{" "}
    </m.div>
  );
}
