import "./detailPage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function DetailPage() {
  const { itemId } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // FIXME: this currently doesn't exist because the firebase account is not active anymore
      const data = {
        ImageURL: "",
        Name: "",
        Price: 0,
        Description: "",
        Amount: 0,
        Type: "",
      };

      setImageUrl(data.ImageURL);
      setTitle(data.Name);
      setPrice(data.Price);
      setDescription(data.Description);
      setAmount(data.Amount);
      setType(data.Type);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="DetailPage" id="DetailPage">
        <div className="left">
          <div className="imgContainer">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h4>{title}</h4>
            <span className="priceSpan">
              ₡ {new Intl.NumberFormat().format(price)} CRC
            </span>
            <button type="submit" className="BuyBtn">
              Buy now
            </button>
            <button type="submit" className="AddCart">
              Add to Cart
            </button>
            <h2> Details </h2>
            <span>Detalles: {description.Details}</span>
            <span>Material: {description.Material}</span>
            <span>Tamano: {description.Size}</span>
          </div>
        </div>
      </div>
    </>
  );
}
