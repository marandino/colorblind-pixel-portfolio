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
export default function DetailPage({ itemId, title, price, imageURL, isAvailable }) {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="imageURL" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Colorblind Pixel</h1>
        </div>
      </div>
    </div>
  );
}
