const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createMatch,
} = require("../controllers/matchController");

router.post("/", auth, createMatch);

module.exports = router;
