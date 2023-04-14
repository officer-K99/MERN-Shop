const express = require("express");
const products = require("./data/products");
const app = express();

app.get("/api/products", (req, res) => {
  res.status(200);
  res.json({
    data: products,
  });
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  if (product) {
    res.status(200);
    res.json({
      data: product,
    });
    // return
  } else {
    res.status(404);
    res.json({
      data: "product not found",
    });
  }
});

app.listen(5000, console.log("server started"));
