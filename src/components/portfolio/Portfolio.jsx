/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import PortfolioList from "../portfolioTabs/PortfolioTabs";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import { Lightbox } from "react-modal-image-react-17";

import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase';

export default function Portfolio() {
  const [selected, setSelected] = useState("snacks");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [download, setDownload] = useState(true);

  const fetchPost = async () => {
       
    await getDocs(collection(db, "PortfolioArt"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.url }));
            setData(newData);                
            console.log(data, newData);
        })
   
}

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
    {
      id: "free",
      title: "FREE WALLPAPER"
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "snacks":
        fetchPost();
        break;
      case "places":
        fetchPost();
        break;
      case "anime":
        fetchPost();
        break;
      case "free":
        fetchPost();
        break;
      default:
        fetchPost();
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
              src={d.URL}
              alt=""
              onClick={() => {
                setOpen(true);
                setImage(d.URL)
                setDownload(selected !== "free");
              }}
            />
            <h3 onClick={() => {
              setOpen(true);
              setImage(d.URL);
              console.log(image)
            }}>{d.Name}</h3>
          </div>
        ))}
        {open && (
          <Lightbox
            medium={image}
            onClose={() => setOpen(false)}
            hideDownload={download}
          />
        )}
      </div>
    </div>
  );
}
