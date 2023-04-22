import express from "express";
import connectDB from "./config/db.js";
import colors from "colors";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

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

app.listen(process.env.PORT, console.log("server started".cyan.bgBlue));
