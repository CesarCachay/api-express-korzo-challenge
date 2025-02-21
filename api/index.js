require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const stockRoutes = require("./stocks");
const activateRoutes = require("./activate-user");
const authenticateRoutes = require("./authenticate");

const app = express();

// Enable CORS
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

// Parse incoming requests
app.use(bodyParser.json());

// API Routes
app.use("/api/stocks", stockRoutes);
app.use("/api/activate-user", activateRoutes);
app.use("/api/authenticate", authenticateRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express API with Stocks and WorkOS API!");
});

module.exports = app;
