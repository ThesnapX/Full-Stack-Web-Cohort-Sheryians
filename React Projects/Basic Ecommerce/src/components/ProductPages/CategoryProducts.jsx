import { useOutletContext, useParams } from "react-router-dom";
import ProductsList from "./ProductsList";

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const { productData, searchTerm } = useOutletContext();

  const filteredProducts = productData
    .filter((item) => item.category === categoryName)
    .filter((item) => {
      const text = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(text) ||
        item.category.toLowerCase().includes(text)
      );
    });

  return <ProductsList productData={filteredProducts} />;
};

export default CategoryProducts;
