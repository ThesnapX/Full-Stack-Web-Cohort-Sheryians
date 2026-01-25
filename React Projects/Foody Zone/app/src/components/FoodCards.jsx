import React, { useEffect } from "react";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

const FoodCards = ({ data, setData, loading, setLoading, error, setError }) => {
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <CardContainer>
      {data?.map((food, i) => {
        return (
          <div key={i} className="food-card">
            <div className="card-img">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="card-content">
              <h1>{food.name}</h1>
              <p>{food.text}</p>
              <div className="card-price">
                <p>${food.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </CardContainer>
  );
};

export default FoodCards;

const CardContainer = styled.div`
  margin: 72px auto 0;
  display: grid;
  max-width: 1200px;
  padding: 1rem;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  .food-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #12121220;
    backdrop-filter: blur(26px);
    border-radius: 10px;
    border: 1px solid #ffffff2c;
    padding: 1rem;
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .card-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-img img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 600px) {
      width: 90px;
      height: 90px;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .card-content h1 {
    font-size: 24px;
    font-weight: 600;
  }

  .card-content p {
    line-height: 1.2rem;
    font-size: 14px;
  }

  .card-price {
    margin-top: 0.5rem;
  }

  .card-price p {
    background: #ff1d1d;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    width: fit-content;
    color: #fff;
    font-weight: 500;

    @media (max-width: 600px) {
      margin: 0 auto;
    }
  }
`;
