const express = require("express");
const {
  getLookbooks,
  getUserLookbook,
  createUserLookbook,
} = require("../controllers/lookbook.controller");
const authUser = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getLookbooks);

router.get("/user", authUser, getUserLookbook);

router.post("/", authUser, createUserLookbook);

module.exports = router;
