import "./shop.scss";
import Footer from "./../footer/Footer";
import ItemCard from "./ItemCard/ItemCard";
import testData from "../../testData";

export default function Shop() {
  
  return (
    <>
      <div className="shop">
        <h1>SHOP IN PROGRESS</h1>
        <div className="container">
          {testData.map((item) => (
            <ItemCard itemId={item.id} title={item.name} price={"1000"} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
