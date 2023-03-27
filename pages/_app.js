import Navbar from "@/components/navBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="">
      <AnimatePresence initial={false}>
        <Navbar />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
