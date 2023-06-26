import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const getPortfolioArt = async () => {
  const response = await getDocs(collection(db, "PortfolioArt")).then(
    (response) =>
      response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.url,
      }))
  );
  return response;
};

const getItems = async () => {
  const response = await getDocs(collection(db, "Items")).then((response) =>
    response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.url,
    }))
  );
  return response;
};

const getItem = async (Id) => {
    const response = await getDocs(collection(db, "Items")).then((response) =>
      response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.url,
      })).filter( doc => doc.Id === Id)
    );
    return response[0];
  };

export { getItems, getItem, getPortfolioArt };
