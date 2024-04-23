const fs = require("fs/promises");

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static("backend/public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  const meals = await fs.readFile("data/available-meals.json", "utf8");
  res.json(JSON.parse(meals));
});

app.get("/orders", async (req, res) => {
  const orders = await fs.readFile("data/orders.json", "utf8");
  res.json(orders ? JSON.parse(orders) : []);
});

app.post("/orders", async (req, res) => {
  const orderData = req.body;

  if (orderData === null || orderData === null || orderData?.length === 0) {
    return res.status(400).json({ message: "Missing data." });
  }

  const newOrder = {
    order: [...orderData],
    id: (Math.random() * 1000).toString()
  };

  await fs.writeFile("data/orders.json", JSON.stringify(newOrder));
  res.status(201).json({ message: "Order created!" });
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
