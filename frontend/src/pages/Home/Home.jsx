import React from "react";
import { products } from "../../products";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product";

const Home = () => {
  return (
    <>
      <h2>Store</h2>
      <Row>
        {products.map((item, index) => {
          return (
            <Col key={index} sm={12} md={6} lg={4}>
              <Product product={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
