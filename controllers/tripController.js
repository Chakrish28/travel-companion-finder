const Trip = require("../models/Trip");

// CREATE TRIP
exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip({
      userId: req.user.id,
      ...req.body
    });

    await trip.save();
    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};


// GET ALL TRIPS OF USER
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id });
    res.json(trips);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};


// UPDATE TRIP
exports.updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) return res.status(404).json({ msg: "Trip not found" });

    if (trip.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTrip);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};


// DELETE TRIP
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) return res.status(404).json({ msg: "Trip not found" });

    if (trip.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await trip.deleteOne();

    res.json({ msg: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};