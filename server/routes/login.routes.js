const express = require("express");
const { createLogin } = require("../controllers/login.controller");

const router = express.Router();

router.post("/", createLogin);

module.exports = router;
