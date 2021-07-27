if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.routes");
const loginRouter = require("./routes/login.routes");
const lookbookRouter = require("./routes/lookbook.routes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: process.env.ORIGIN_HOST,
  })
);

app.use("/api/v1/product", productRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/lookbook", lookbookRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to this Avenue Fashion API 🥳",
  });
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT} 🚀`
  );
});
