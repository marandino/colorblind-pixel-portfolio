import "./shop.scss";
import Footer from "../footer/Footer";
import ItemCard from "./ItemCard/ItemCard";

import { useState, useEffect } from "react";

// Define an interface for the item data
interface Item {
  Id: string;
  Name: string;
  Description: string;
  Price: number;
  ImageURL: string;
  Amount: number;
}

export default function Shop(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]); // State typed as an array of Item

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems: Item[] = [
        {
          Id: "1",
          Name: "Grumpy Cat Poster",
          Description: "Everyone's favorite cat who loves to hate",
          Price: 15,
          ImageURL:
            "https://m.media-amazon.com/images/I/71-3ZzX-QLL._AC_UF894,1000_QL80_.jpg",
          Amount: 0,
        },
      ];
      setItems(fetchedItems);
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
              key={item.Id}
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
