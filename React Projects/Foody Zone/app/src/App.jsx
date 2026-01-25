import styled from "styled-components";
import NavBar from "./components/NavBar";
import FoodCards from "./components/FoodCards";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [activeType, setActiveType] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data.filter((food) => {
    const matchesType = activeType === "All" || food.type === activeType;

    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <MainContainer>
      <NavBar
        setActiveType={setActiveType}
        activeType={activeType}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="food-cards">
        <img src="/background.png" alt="" />
      </div>

      <FoodCards
        data={filteredData}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />
    </MainContainer>
  );
};

export default App;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  .food-cards {
    img {
      width: 100%;
      height: 100vh;
      position: absolute;
      z-index: -1;
      top: 0;
      opacity: 0.4;
      left: 0;
      object-fit: cover;
    }
    opacity: 1;
  }
`;
