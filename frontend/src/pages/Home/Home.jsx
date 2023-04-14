import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const fetchProducts = await axios.get(
        "http://127.0.0.1:5000/api/products"
      );
      const { data } = fetchProducts;
      setProducts(data);
    };
    sendRequest();
  }, []);

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
