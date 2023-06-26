import PortfolioList from "../portfolioTabs/PortfolioTabs";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import { Lightbox } from "react-modal-image-react-17";

import { getPortfolioArt } from "../../Utils/FirebaseRequest/ItemsRequests";

export default function Portfolio() {
  const [selected, setSelected] = useState("Food");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [download, setDownload] = useState(true);

  const list = [
    {
      id: "Food",
      title: "Food",
    },
    {
      id: "Background",
      title: "Background",
    },
    {
      id: "Portrait",
      title: "Portrait",
    },
    {
      id: "Fullbody",
      title: "Fullbody",
    },
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolioArt();
      setData(data);
    }
    fetchData();
  }, []);

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
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data
          .filter((doc) => doc.Category === selected)
          .map((d) => (
            <div className="item">
              <img
                src={d.URL}
                alt=""
                onClick={() => {
                  setOpen(true);
                  setImage(d.URL);
                  setDownload(selected !== "free");
                }}
              />
              <h3
                onClick={() => {
                  setOpen(true);
                  setImage(d.URL);
                }}
              >
                {d.Name}
              </h3>
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
