/* eslint-disable jsx-a11y/anchor-has-content */
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import SocialMediaIcon from "../socialMediaLinks/SocialMediaIcon";
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Pixel Art", "Pixel Art Logos", "Pixel Art Animation"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/cevicheriaMagikarp.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Colorblind Pixel</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <div className="socialMediaLogos">
            <SocialMediaIcon
              socialMedia={"fa-facebook"}
              URL={"https://www.facebook.com/ZhouIsDrawing"}
            />
            <SocialMediaIcon
              socialMedia={"fa-instagram"}
              URL={"https://www.instagram.com/colorblind_pixel/"}
            />
            <SocialMediaIcon
              socialMedia={"fa-twitter"}
              URL={"https://twitter.com/ColorblindPixl"}
            />
          </div>
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
