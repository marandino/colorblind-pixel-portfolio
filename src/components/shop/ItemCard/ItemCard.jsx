import "./itemCard.scss";

export default function ItemCard() {
  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img src="assets/cevicheriaMagikarp.png" alt="" />
      </div>

      <div className="description">
        <h3>Sticker Magikarp Caldosa</h3>
        <span>₡ 1.000,0 CRC</span>
      </div>
    </div>
  );
}
