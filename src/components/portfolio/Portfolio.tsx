import PortfolioList from "../portfolioTabs/PortfolioTabs";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import { Lightbox as BaseLightbox } from "react-modal-image";

type Data = {
  Name: string;
  URL: string;
  Category: string;
  id: string;
  title?: string;
};

// TODO: fix this by installing the latest version of the types, once my PR is merged to their repo.
const Lightbox = (
  props: React.ComponentProps<typeof BaseLightbox> & { onClose: () => void }
) => {
  return <BaseLightbox {...props} />;
};

export default function Portfolio() {
  const [selected, setSelected] = useState("Food");
  const [data, setData] = useState<Data[]>([]);
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
      // TODO: remove this placeholder data
      // note: this will probably be replaced with some cloudinary data, or such. Also, the whole thing might be replaced
      // with a Masonry component, that shows the images in a grid
      setData([
        {
          Name: "Food",
          // TODO: replace with actual image
          URL: "https://picsum.photos/200/500",
          Category: "Food",
          id: "1",
        },
        {
          Name: "Background",
          // TODO: replace with actual image
          URL: "https://picsum.photos/200/400",
          Category: "Background",
          id: "2",
        },
        {
          Name: "Portrait",
          // TODO: replace with actual image
          URL: "https://picsum.photos/200/200",
          Category: "Portrait",
          id: "3",
        },
        {
          Name: "Fullbody",
          // TODO: replace with actual image
          URL: "https://picsum.photos/200/900",
          Category: "Fullbody",
          id: "4",
        },
      ]);
    };
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
        {data &&
          data
            .filter((doc) => doc.Category === selected)
            .map((d) => (
              <div className="item" key={d.id}>
                {" "}
                {/* Added key prop */}
                <img
                  src={d.URL}
                  alt={d.Name}
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
            small={image}
            large={image}
            alt="Portfolio Image"
            onClose={() => setOpen(false)}
            hideDownload={download}
          />
        )}
      </div>
    </div>
  );
}
