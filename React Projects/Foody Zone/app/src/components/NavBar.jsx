import React from "react";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";

const NavBar = ({ setActiveType, activeType, searchValue, setSearchValue }) => {
  return (
    <NavContainer>
      <img src="/logo.svg" alt="logo" />

      <div className="filter-containers">
        {["All", "breakfast", "lunch", "dinner"].map((type) => (
          <FilterButtons
            key={type}
            text={type}
            active={activeType === type}
            onClick={() => setActiveType(type)}
          />
        ))}
      </div>

      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Food..."
        />
      </div>
    </NavContainer>
  );
};

export default NavBar;
const NavContainer = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 8rem;
  background-color: #f1f1f129;
  backdrop-filter: blur(20px);
  border-bottom: 2px solid;
  border-color: -moz-linear-gradient(top, #ffffff, #ff0000);

  border-bottom: 2px solid transparent; /* Set a transparent border */
  border-image: linear-gradient(
    to right,
    #c2c2c2,
    #929292
  ); /* Apply the gradient */
  border-image-slice: 1; /* Ensure the entire "image" is used as the border */

  img {
    height: 28px;
  }
  .search {
    input {
      width: 15rem;
      padding: 0.8rem 0.5rem;
      border-radius: 10px;
      outline: none;
      border: none;
      font-weight: 500;
    }
  }
  .filter-containers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;
