import { useOutletContext } from "react-router-dom";
import ProductsList from "./ProductsList";

const AllProducts = () => {
  const { productData, searchTerm } = useOutletContext();

  const filteredProducts = productData.filter((item) => {
    const text = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text)
    );
  });
  return <ProductsList productData={filteredProducts} />;
};

export default AllProducts;
