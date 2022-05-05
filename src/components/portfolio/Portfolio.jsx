/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import { snacks, places, anime } from "../../data";
import { Lightbox } from "react-modal-image-react-17";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const list = [
    {
      id: "snacks",
      title: "Snacks",
    },
    {
      id: "places",
      title: "Places",
    },
    {
      id: "anime",
      title: "Anime",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "snacks":
        setData(snacks);
        break;
      case "places":
        setData(places);
        break;
      case "anime":
        setData(anime);
        break;
      default:
        setData(snacks);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
              onClick={() => {
                setOpen(true);
                setImage(d.img);
              }}
            />
            <h3>{d.title}</h3>
          </div>
        ))}
        {open && (
          <Lightbox
            medium={image}
            onClose={() => setOpen(false)}
            hideDownload={true}
          />
        )}
      </div>
    </div>
  );
}
