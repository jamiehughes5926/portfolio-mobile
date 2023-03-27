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

  const directionFactor = revealDirection === "right" ? 1 : -1;
  const revealAnimation = {
    hidden: { scaleX: 0, x: -50 * directionFactor },
    visible: {
      scaleX: 1,
      x: 0,
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
        variants={revealAnimation}
        className="w-1/2 m-5 md:w-1/3 md:mt-20 md:ml-20 md:mb-20"
        style={{
          transformOrigin: revealDirection === "right" ? "right" : "left",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default RevealImage;
