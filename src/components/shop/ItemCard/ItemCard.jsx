import "./itemCard.scss";
import { Link } from "react-router-dom";
export default function ItemCard({ itemId, title, price, imageURL, isAvailable }) {
  return (
    <Link to={`/shop/${itemId}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="itemCard">
        <div className="imageContainer">
          <img src={imageURL} alt="" />
        </div>
        <div className="description">
          <h3>{title}</h3>
          { !isAvailable && <span> Not Available</span>}
          <span>₡ {new Intl.NumberFormat().format(price)} CRC</span>
        </div>
      </div>
    </Link>
  );
}
