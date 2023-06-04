import { React } from "react";
import { Routes, Route } from "react-router-dom";

import Shop from "./components/shop/shop";
import HomePage from "./components/portfolio/HomePage";

export default function AppRouter() {
    return (
        <>
        <Routes>
        <Route path="" element={ <HomePage />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
        </>
    )
}