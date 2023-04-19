import Navbar from "@/components/navBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    if (loading) {
      setShowLoadingScreen(true);
      setTimeout(() => {
        setLoading(false);
        setShowLoadingScreen(false);
      }, 5000); // Adjust the duration as needed
    }
  }, [loading]);

  return (
    <div className="bg-whitey">
      {showLoadingScreen && <LoadingScreen />}
      {!showLoadingScreen && (
        <>
          <Navbar className="mt-0 p-0" />
          <AnimatePresence initial={true}>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
