import "./itemCard.scss";
import { Link } from "react-router-dom";
export default function ItemCard({itemId, title, price}) {
  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img src="assets/cevicheriaMagikarp.png" alt="" />
      </div>

      <div className="description">
      <Link to="/shop/test"> Shop </Link>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
}
