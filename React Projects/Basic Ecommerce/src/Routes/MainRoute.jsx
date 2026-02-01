import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import AllProducts from "../components/ProductPages/AllProducts";
import CategoryProducts from "../components/ProductPages/CategoryProducts";
import SingleProduct from "../components/ProductPages/SingleProduct";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AllProducts />} />
          <Route path="category/:categoryName" element={<CategoryProducts />} />
          <Route path="product/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
