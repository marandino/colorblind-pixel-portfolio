import { useCloudinaryImages } from "../hooks/useCloudinaryImages";
import CloudinaryImage from "./CloudinaryImage";
import { useState, useEffect } from "react";

export default function Partnerships() {
  const { images: brands, loading, error } = useCloudinaryImages("brands");
  const isMobile = window.innerWidth <= 768;
  const [brandsToShow, setBrandsToShow] = useState(4);

  useEffect(() => {
    if (isMobile) {
      setBrandsToShow(3);
    }
    setBrandsToShow(brands.length);
  }, [isMobile]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="partners" id="partnerships">
      <h1>Partnerships</h1>
      <div className="partners-container">
        {brands.slice(0, brandsToShow).map((brand) => (
          <div className="partner-card" key={brand.public_id}>
            <CloudinaryImage
              public_id={brand.public_id}
              alt={brand.alt}
              height={100}
            />
            <h3 className="title">{brand.caption}</h3>
            <p className="description">{brand.description}</p>
          </div>
        ))}
        {brandsToShow < brands.length && (
          <button
            className="button"
            onClick={() => setBrandsToShow(brands.length)}
          >
            load more
          </button>
        )}
      </div>
    </section>
  );
}
