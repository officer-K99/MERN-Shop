const express = require("express");
const products = require("./data/products");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/api/products", (req, res) => {
  res.status(200);
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  if (product) {
    res.status(200);
    res.json(product);
    // return
  } else {
    res.status(404);
    res.json({
      data: "product not found",
    });
  }
});

app.listen(5000, console.log("server started"));
