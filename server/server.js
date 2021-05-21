if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/example", (req, res) => {
  res.status(200).json({
    message: "Everything is fine 🥳",
  });
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT} 🚀`
  );
});
