import "../styles/Preloader.module.css";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
          preloader.style.display = "none";
        }
      },
    });

    tl.to("#percent, #bar", {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });

    tl.to("#preloader", {
      duration: 0.8,
      width: "0%",
    });

    let width = 1;
    const bar = document.getElementById("barconfrm");
    let id;

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        tl.play();
      } else {
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
      }
    }

    function move() {
      id = setInterval(frame, 10);
    }

    move();
  }, []);

  return (
    <div id="preloader">
      <div id="percent">1%</div>
      <div id="bar">
        <div id="barconfrm"></div>
      </div>
    </div>
  );
};

export default Preloader;
