import "./itemCard.scss";
import { Link } from "react-router-dom";
export default function ItemCard({ itemId, title, price, imageURL }) {
  return (
    <Link to={`/shop/${itemId}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="itemCard">
        <div className="imageContainer">
          <img src={imageURL} alt="" />
        </div>
        <div className="description">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  );
}
