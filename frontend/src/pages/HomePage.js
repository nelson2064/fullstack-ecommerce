import React from "react";
import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  return data;
};

const HomePage = () => {
  const { categories } = useSelector((state) => state.getCategories);

  const containerStyle = {
    background: "linear-gradient(to bottom, #FF5733, #FF8C00, #FFD700)",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <HomePageComponent categories={categories} getBestsellers={getBestsellers} />
    </div>
  );
};

export default HomePage;
