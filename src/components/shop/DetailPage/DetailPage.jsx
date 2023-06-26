// import "./detailPage.scss";
// import {useParams} from "react-router-dom"
// import testData from "../../../testData";

// export default function DetailPage() {
//   const {itemId} = useParams();
//   const thisProduct = testData.find(prod => prod.id === itemId)
//   return (
//     <div className="detailPage">
//     <h1>{thisProduct.name}</h1>
//       <div className="imageContainer">

//       </div>
//     </div>
//   );
// }

/* eslint-disable jsx-a11y/anchor-has-content */
import "./detailPage.scss";
import {useParams} from "react-router-dom"
import { getItem } from "../../../Utils/FirebaseRequest/ItemsRequests";
import { useState, useEffect } from "react";
export default function DetailPage() {
  const {itemId} = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItem(itemId);
      setImageUrl(data.ImageURL);
      setTitle(data.Name);
      setPrice(data.Price);
      setDescription(data.Description);
      setAmount(data.Amount);
      setType(data.Type);
    }
    fetchData();
  }, []);

  return (
    <div className="DetailPage" id="DetailPage">
      <div className="left">
        <div className="imgContainer">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>{title}</h2>
          <span>{price}</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
