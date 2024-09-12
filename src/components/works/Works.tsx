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
      img: "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932034/7bc7f1c2-b43f-4803-bded-2bee270d458a.png",
    },
    {
      id: "2",
      title: "Pixel Logo",
      desc: "Pixel art logos for your social media.",
      img: "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932069/e60b8382-d03a-4e97-a192-5e28763af8cf.png",
    },
    {
      id: "3",
      title: "And More!",
      desc: "Your imagination is the limitation",
      img: "https://res.cloudinary.com/dkhpxyxnt/image/upload/v1725932085/c66fc734-9911-4928-8c3c-ecd5b34dcaf0.png",
    },
  ];

  const handleClick = (way: string) => {
    if (way === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
    } else {
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
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
