import "./shop.scss";
import Footer from "./../footer/Footer";
import ItemCard from "./ItemCard/ItemCard";

import { useState, useEffect } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setItems({
        Id: "1",
        Name: "Grumpy Cat Poster",
        Description: "Everyone's favorite cat who loves to hate",
        Price: 15,
        ImageURL:
          "https://m.media-amazon.com/images/I/71-3ZzX-QLL._AC_UF894,1000_QL80_.jpg",
        Amount: 0,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="shop">
        <h1>SHOP IN PROGRESS</h1>
        <div className="container">
          {items.map((item) => (
            <ItemCard
              itemId={item.Id}
              title={item.Name}
              price={item.Price}
              imageURL={item.ImageURL}
              isAvailable={item.Amount === 0}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
