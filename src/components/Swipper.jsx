import React, { useEffect, useRef, useState } from "react";
import "../css/swipper.css";

const Swipper = () => {
  const containerRef = useRef(null);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setDirection(currentScrollTop > lastScrollTop ? "right" : "left");
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const container = containerRef.current;

    const animate = () => {
      if (container) {
        if (direction === "right") {
          container.scrollLeft += 1;
        } else {
          container.scrollLeft -= 1;
        }

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div className="swipper-outer-wrapper">
      <div className="swipper-glow-left"></div>
      <div className="swipper-glow-right"></div>

      <div
        className="swipper-container"
        ref={containerRef}
      >
        <div className="swipper-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="swipper-card">Coming Soon...</div>
              <div className="swipper-card">Coming Soon...</div>
              <div className="swipper-card">Coming Soon...</div>

              <div
                className="swipper-card iframe-card"
                onClick={() =>
                  window.open("https://morent-steel.vercel.app", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <div className="iframe-wrapper">
                  <iframe
                    src="https://morent-steel.vercel.app"
                    title="Morent Steel"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Swipper;
