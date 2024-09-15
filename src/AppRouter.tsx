import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import DetailPage from "./components/shop/DetailPage/DetailPage";
// import Shop from "./components/shop/shop";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:itemId" element={<DetailPage />} /> */}
      </Routes>
    </>
  );
}
