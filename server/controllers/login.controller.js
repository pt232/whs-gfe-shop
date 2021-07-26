if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const createLogin = (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
    return res.status(400).json({
      success: false,
      error: "Email or password is incorrect.",
    });
  }

  res.status(200).json({
    success: true,
    token: process.env.ACCESS_TOKEN,
  });
};

module.exports = {
  createLogin,
};
