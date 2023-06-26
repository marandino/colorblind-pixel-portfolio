import "./shop.scss";
import Footer from "./../footer/Footer";
import ItemCard from "./ItemCard/ItemCard";

import { useState, useEffect } from "react";

import { getItems } from "../../Utils/FirebaseRequest/ItemsRequests";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="shop">
        <h1>SHOP IN PROGRESS</h1>
        <div className="container">
          {items.map((item) => (
            <ItemCard itemId={item.Id} title={item.Name} price={item.Price} imageURL={item.ImageURL} isAvailable={item.Amount === 0}/>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
