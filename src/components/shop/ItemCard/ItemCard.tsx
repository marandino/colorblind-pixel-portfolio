import "./itemCard.scss";
import { Link } from "react-router-dom";

interface ItemCardProps {
  itemId: string;
  title: string;
  price: number;
  imageURL: string;
  isAvailable: boolean;
}

export default function ItemCard({
  itemId,
  title,
  price,
  imageURL,
  isAvailable,
}: ItemCardProps): JSX.Element {
  return (
    <Link to={`/shop/${itemId}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="itemCard">
        <div className="imageContainer">
          <img src={imageURL} alt={title} />
        </div>
        <div className="description">
          <h3>{title}</h3>
          {!isAvailable && <span> Not Available</span>}
          <span>₡ {new Intl.NumberFormat().format(price)} CRC</span>
        </div>
      </div>
    </Link>
  );
}
