import "./works.scss";
import { useState } from "react";

type SlideData = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const data: SlideData[] = [
    {
      id: "1",
      title: "Portraits",
      desc: "Pixel Art portraits commissions",
      img: "assets/waymond.png",
    },
    {
      id: "2",
      title: "Pixel Logo",
      desc: "Pixel art logos for your social media.",
      img: "./assets/zhouLogoBasic.png",
    },
    {
      id: "3",
      title: "And More!",
      desc: "Your imagination is the limitation",
      img: "/Phone wallpaper template.png",
    },
  ];

  const handleClick = (way: string) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="left arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="right arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
