import "./portfolio.scss";
import { useState } from "react";
import { Lightbox as BaseLightbox } from "react-modal-image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import PortfolioCategories from "../PortfolioCategories/PortfolioCategories";
import { useCloudinaryImages } from "../../hooks/useCloudinaryImages";
import { ImageWithMetadata } from "../../types";

// TODO: fix this by installing the latest version of the types, once my PR is merged to their repo.
const Lightbox = (
  props: React.ComponentProps<typeof BaseLightbox> & { onClose: () => void }
) => {
  return <BaseLightbox {...props} />;
};

export default function Portfolio() {
  const tags = ["snacks", "anime", "backgrounds"];
  const snacksImages = useCloudinaryImages("snacks");
  const animeImages = useCloudinaryImages("anime");
  const backgroundsImages = useCloudinaryImages("backgrounds");

  const [selectedCategory, setSelectedCategory] = useState<string>("snacks");
  const [maximumImages, setMaximumImages] = useState(12);
  const isMobile = window.innerWidth <= 768;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const isLoading =
    snacksImages.loading || animeImages.loading || backgroundsImages.loading;
  const hasError =
    snacksImages.error || animeImages.error || backgroundsImages.error;

  if (isLoading) return <div>Loading...</div>;

  if (hasError)
    return <div>Error: An error occurred while fetching images</div>;

  // this will make the whole component re-render when the selectedCategory changes
  const getSelectedImages = (): ImageWithMetadata[] => {
    switch (selectedCategory) {
      case "snacks":
        return snacksImages.images;
      case "anime":
        return animeImages.images;
      case "backgrounds":
        return backgroundsImages.images;
      // just to satisfy typescript
      default:
        return [];
    }
  };

  const selectedImages = getSelectedImages();

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
          {selectedImages
            .slice(0, maximumImages)
            .map((image: ImageWithMetadata) => (
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
        </Masonry>
      </ResponsiveMasonry>

      {maximumImages < selectedImages.length && (
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
