import { useEffect, useState } from "react";
import "/src/index.css";
import { NavLink } from "react-router-dom";

const CategoryFilter = ({ productData, categories, setCategories }) => {
  useEffect(() => {
    if (!productData || productData.length === 0) return;

    const uniqueCategories = [];

    productData.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });

    setCategories(uniqueCategories);
  }, [productData]);

  return (
    <div className="px-2 sm:px-4 sm:py-3 md:px-6 lg:px-32 mt-4 whitespace-nowrap overflow-x-auto flex scroll-ml-3 gap-2 scroll-smooth no-scrollbar">
      {categories.map((category, index) => (
        <NavLink
          key={index}
          to={`/category/${category}`}
          className={({ isActive }) =>
            `capitalize  duration-200  transition-colors hover:bg-primary hover:text-secondary  border py-2 px-3 active:scale-98
     ${isActive ? "bg-primary text-secondary" : "text-primary bg-transparent"}`
          }
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryFilter;
