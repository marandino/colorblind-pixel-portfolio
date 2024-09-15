import "./portfolio.scss";
import { useState, useEffect } from "react";
import { Lightbox as BaseLightbox } from "react-modal-image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import PortfolioCategories from "../PortfolioCategories/PortfolioCategories";

// TODO: fix this by installing the latest version of the types, once my PR is merged to their repo.
const Lightbox = (
  props: React.ComponentProps<typeof BaseLightbox> & { onClose: () => void }
) => {
  return <BaseLightbox {...props} />;
};
// https://cloudinary.com/documentation/list_assets
// https://res.cloudinary.com/<your_cloud_name>/<resource_type>/list/<tag>.json
// notes, had to allow the resource list to be public in the cloudinary console, to get this to work.

type ImageWithMetadata = {
  caption: string;
  description: string;
  alt: string;
  public_id: string;
};

const parseImageData = (resource: unknown): ImageWithMetadata | undefined => {
  if (typeof resource === "object" && resource !== null) {
    const { caption, description, alt, public_id } = resource as {
      caption: string;
      description: string;
      alt: string;
      public_id: string;
    };
    return { caption, description, alt, public_id };
  }
  return undefined;
};

const fetchTagData = async (tag: string): Promise<ImageWithMetadata[]> => {
  console.log("fetching data for tag", tag);
  return fetch(`https://res.cloudinary.com/dkhpxyxnt/image/list/${tag}.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.resources.map((resource: unknown) => {
        const image = parseImageData(resource);
        if (image) {
          return image;
        }
      });
    })
    .catch((error) => console.error("Error fetching folder images:", error));
};

export default function Portfolio() {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [snacks, setSnacks] = useState<ImageWithMetadata[]>([]);
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [anime, setAnime] = useState<ImageWithMetadata[]>([]);
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgrounds, setBackgrounds] = useState<ImageWithMetadata[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>("snacks");
  const [maximumImages, setMaximumImages] = useState(12);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  // const [download, setDownload] = useState(true);

  const tags = ["snacks", "anime", "backgrounds"];

  useEffect(() => {
    const fetchData = async () => {
      tags.forEach(async (tag) => {
        const data = await fetchTagData(tag);
        switch (tag) {
          case "snacks":
            setSnacks(data);
            break;
          case "anime":
            setAnime(data);
            break;
          case "backgrounds":
            setBackgrounds(data);
        }
      });
    };
    fetchData();
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <section className="container">
      <h1>Portfolio</h1>

      <PortfolioCategories
        categories={tags}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ResponsiveMasonry columnsCountBreakPoints={{ 900: 4, 600: 3 }}>
        <Masonry gutter="10px">
          {selectedCategory === "snacks" &&
            snacks.slice(0, maximumImages).map((image: ImageWithMetadata) => (
              <CloudinaryImage
                onClick={() => {
                  setImage(image.public_id);
                  setOpen(true);
                }}
                key={image.public_id}
                public_id={image.public_id}
                alt={image.alt}
                height={isMobile ? 200 : 300}
              />
            ))}
          {selectedCategory === "anime" &&
            anime.slice(0, maximumImages).map((image: ImageWithMetadata) => (
              <CloudinaryImage
                onClick={() => {
                  setImage(image.public_id);
                  setOpen(true);
                }}
                key={image.public_id}
                public_id={image.public_id}
                height={isMobile ? 200 : 300}
                alt={image.alt}
              />
            ))}
          {selectedCategory === "backgrounds" &&
            backgrounds
              .slice(0, maximumImages)
              .map((image: ImageWithMetadata) => (
                <CloudinaryImage
                  onClick={() => {
                    setImage(image.public_id);
                    setOpen(true);
                  }}
                  key={image.public_id}
                  public_id={image.public_id}
                  height={isMobile ? 200 : 300}
                  alt={image.alt}
                />
              ))}
        </Masonry>
      </ResponsiveMasonry>

      {maximumImages < eval(selectedCategory).length && (
        <div className="portfolio-load-more">
          <button
            className="button"
            onClick={() => setMaximumImages(maximumImages + 9)}
          >
            load more
          </button>
        </div>
      )}

      {open && (
        <Lightbox
          small={`https://res.cloudinary.com/dkhpxyxnt/image/upload/${image}`}
          large={`https://res.cloudinary.com/dkhpxyxnt/image/upload/${image}`}
          hideDownload={true}
          hideZoom={true}
          alt={image}
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
}
