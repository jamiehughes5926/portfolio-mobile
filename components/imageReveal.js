import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealImage = ({ src, alt, revealDirection = "left" }) => {
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

  const revealAnimationRight = {
    hidden: { x: 0, clipPath: `inset(0% 0% 0% 100%)` },
    visible: {
      x: 0,
      clipPath: `inset(0% 0% 0% 0%)`,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const selectedAnimation =
    revealDirection === "right" ? revealAnimationRight : revealAnimationLeft;

  return (
    <div ref={inViewRef} className="overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        initial="hidden"
        animate={animationControls}
        variants={selectedAnimation}
        className="w-3/4 m-auto mt-5 md:w-1/3 md:mt-20 md:ml-20 md:mb-20"
        style={{
          backgroundColor: "#fff",
          WebkitClipPath:
            revealDirection === "right"
              ? "inset(0% 0% 0% 100%)"
              : "inset(0% 100% 0% 0%)",
          clipPath:
            revealDirection === "right"
              ? "inset(0% 0% 0% 100%)"
              : "inset(0% 100% 0% 0%)",
        }}
      />
    </div>
  );
};

export default RevealImage;
