import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductPages/ProductsList";
import CateogaryFilter from "./components/ProductPages/CateogaryFilter";
import { Outlet } from "react-router-dom";
import SingleProduct from "./components/ProductPages/SingleProduct";
export const BASE_URL = "https://fakestoreapi.com/products";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  // Product Data mile
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <div className="w-full ">
        <Navbar setSearchTerm={setSearchTerm} />
        <CateogaryFilter
          productData={productData}
          categories={categories}
          setCategories={setCategories}
        />
        <Outlet context={{ productData, searchTerm }} />
      </div>
    </>
  );
};

export default App;
