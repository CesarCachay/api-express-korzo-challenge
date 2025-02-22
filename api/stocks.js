const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const stockData = {
    symbol: "AAPL",
    prices: [
      { date: "2024-03-01", close: 150.25 },
      { date: "2024-04-02", close: 152.3 },
      { date: "2024-05-03", close: 153.25 },
      { date: "2024-06-04", close: 151.9 },
      { date: "2024-07-05", close: 152.65 },
      { date: "2024-08-06", close: 155.11 },
      { date: "2024-09-07", close: 150.45 },
      { date: "2024-10-08", close: 163.5 },
      { date: "2024-11-09", close: 161.85 },
      { date: "2024-12-10", close: 162.34 },
      { date: "2025-01-11", close: 158.45 },
      { date: "2025-02-12", close: 155.52 },
    ],
  };

  res.status(200).json(stockData);
});

module.exports = router;
