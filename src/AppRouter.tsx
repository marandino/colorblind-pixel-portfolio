import { Routes, Route } from "react-router-dom";

import Shop from "./components/shop/shop";
import HomePage from "./components/portfolio/HomePage";
import DetailPage from "./components/shop/DetailPage/DetailPage";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<DetailPage />} />
      </Routes>
    </>
  );
}
