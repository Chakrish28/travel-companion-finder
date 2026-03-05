const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
  createTrip,
  getTrips
} = require("../controllers/tripController");

router.post("/", auth, createTrip);
router.get("/", auth, getTrips);

module.exports = router;