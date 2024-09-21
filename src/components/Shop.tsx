import React from "react";

import CloudinaryImage from "./CloudinaryImage";
import { useCloudinaryImages } from "../hooks/useCloudinaryImages";

const formatPrice = (price: string) => {
  // prices come in as num
  const priceNum = Number(price);
  if (isNaN(priceNum)) {
    return price;
  }

  return new Intl.NumberFormat("cr-CR", {
    style: "currency",
    currency: "CRC",
  }).format(priceNum);
};

const Shop: React.FC = () => {
  const { images: products, loading, error } = useCloudinaryImages("merch");

  const isMobile = window.innerWidth <= 768;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="shop-container">
      <h1>Merchandising</h1>
      <div className="shop-grid">
        {(isMobile ? products.slice(0, 4) : products).map((product) => (
          <a
            href={product.URL}
            className="card"
            key={product.public_id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CloudinaryImage
              className="product-image"
              public_id={product.public_id}
              alt={product.alt}
              width={300}
              height={300}
            />

            <h3>{product.caption}</h3>
            <p className="product-description">{product.alt}</p>
            <p className="price">{formatPrice(product.price || "N/A")}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Shop;
