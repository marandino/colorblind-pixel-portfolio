import "./detailPage.scss";
// import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface ProductData {
  ImageURL: string;
  Name: string;
  Price: number;
  Description: {
    Details: string;
    Material: string;
    Size: string;
  };
  Amount: number;
  Type: string;
}

export default function DetailPage() {
  // const { itemId } = useParams<{ itemId: string }>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<ProductData["Description"]>({
    Details: "",
    Material: "",
    Size: "",
  });
  const [price, setPrice] = useState<number>(0);
  // const [amount, setAmount] = useState<number>(0);
  // const [type, setType] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductData = {
        ImageURL: "",
        Name: "",
        Price: 0,
        Description: {
          Details: "",
          Material: "",
          Size: "",
        },
        Amount: 0,
        Type: "",
      };

      setImageUrl(data.ImageURL);
      setTitle(data.Name);
      setPrice(data.Price);
      setDescription(data.Description);
      // setAmount(data.Amount);
      // setType(data.Type);
    };
    fetchData();
  }, []);

  return (
    <div className="DetailPage" id="DetailPage">
      <div className="left">
        <div className="imgContainer">
          <img src={imageUrl} alt={title} />
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
          <span>Detalles: {description?.Details || "N/A"}</span>
          <span>Material: {description?.Material || "N/A"}</span>
          <span>Tamaño: {description?.Size || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
