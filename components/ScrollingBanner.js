import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingBanner = ({ speed = 1 }) => {
  const bannerText = "Front end dev * ";
  const repeatedText = bannerText.repeat(20);
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const bannerWidth = banner.getBoundingClientRect().width / 2;

    gsap.to(banner, {
      x: -bannerWidth,
      duration: bannerWidth / (100 * speed),
      repeat: -1,
      ease: "linear",
    });
  }, [speed]);

  return (
    <div
      className="banner-container uppercase"
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      <div
        className="banner"
        ref={bannerRef}
        style={{ display: "inline-block" }}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default ScrollingBanner;
