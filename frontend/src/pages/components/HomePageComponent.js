import React from "react";
import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";

const HomePageComponent = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getBestsellers()
      .then((data) => {
        setBestsellers(data);
      })
      .catch((er) => {
        setError(
          er.response.data.message
            ? er.response.data.message
            : er.response.data
        );
        console.log(
          er.response.data.message
            ? er.response.data.message
            : er.response.data
        );
      });
    setMainCategories((cat) =>
      categories.filter((item) => !item.name.includes("/"))
    );
  }, [categories]);

 
  return (
    <>
      <MetaComponent />
      <ProductCarouselComponent bestSellers={bestSellers} />
      <Container
        className="homepage-container"
        style={{
          background:  "linear-gradient(to bottom, #FF5733, #FF8C00, #FFD700)", // Adjust gradient colors as needed
          minHeight: "100vh",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "50px", // Adjust margin-top as needed
        }}
      >
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
        {error}
      </Container>
    </>
  );
};

export default HomePageComponent;