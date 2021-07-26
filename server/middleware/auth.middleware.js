if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const authUser = (req, res, next) => {
  const { token } = req.body;

  if (token === process.env.ACCESS_TOKEN) {
    next();
  } else {
    res.status(404).json({
      success: false,
      data: "You are not authorized.",
    });
  }
};

module.exports = authUser;
