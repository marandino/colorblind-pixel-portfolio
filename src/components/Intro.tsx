/* eslint-disable jsx-a11y/anchor-has-content */
import { init } from "ityped";
import { useEffect, useRef } from "react";
import SocialMediaSection from "./socialMediaLinks/SocialMediaSection";

export default function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Pixel Art", "Pixel Art Logos", "Pixel Art Animation"],
      });
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932096/94e95e1d-2e1a-4375-81ce-042132ff5f0a.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I&apos;m</h2> <h1>Colorblind Pixel</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <SocialMediaSection />
        </div>
        <div className="arrow">
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
