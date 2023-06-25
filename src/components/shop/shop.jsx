import "./shop.scss";
import Footer from "./../footer/Footer";
import ItemCard from "./ItemCard/ItemCard";
import testData from "../../testData";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Shop() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    await getDocs(collection(db, "Items")).then((response) => {
      const newData = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.url,
      }));
      console.log(newData);
      setItems(newData);
    });
  };

  useEffect(() => {
    getItems();
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
