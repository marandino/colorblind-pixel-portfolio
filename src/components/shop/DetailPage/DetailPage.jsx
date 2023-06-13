import "./detailPage.scss";
import {useParams} from "react-router-dom"
import testData from "../../../testData";

export default function DetailPage() {
  const {itemId} = useParams();
  const thisProduct = testData.find(prod => prod.id === itemId)
  return (
    <div className="detailPage">
    <h1>{thisProduct.name}</h1>
      <div className="imageContainer">

      </div>
    </div>
  );
}