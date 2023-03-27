import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealImageLeft = ({ src, alt }) => {
  const [inViewRef, inView] = useInView({ threshold: 0.1 });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [animationControls, inView]);

  const revealAnimationLeft = {
    hidden: { x: 0, clipPath: `inset(0% 100% 0% 0%)` },
    visible: {
      x: 0,
      clipPath: `inset(0% 0% 0% 0%)`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={inViewRef} className="overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        initial="hidden"
        animate={animationControls}
        variants={revealAnimationLeft}
        className="w-1/2 m-auto md:w-4/5  md:ml-20 md:mb-20 float-right"
        style={{
          backgroundColor: "#fff",
          WebkitClipPath: "inset(0% 100% 0% 0%)",
          clipPath: "inset(0% 100% 0% 0%)",
        }}
      />
    </div>
  );
};

export default RevealImageLeft;
