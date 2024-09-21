import { useCloudinaryImages } from "../hooks/useCloudinaryImages";
import CloudinaryImage from "./CloudinaryImage";

export default function Partnerships() {
  const { images: brands, loading, error } = useCloudinaryImages("brands");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="partners" id="partnerships">
      <h1>Partnerships</h1>
      <div className="partners-container">
        {brands.map((brand) => (
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
      </div>
    </section>
  );
}
