const Trip = require("../models/Trip");

// Create a new trip
exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip({
      userId: req.user.id,   // Link trip to logged-in user
      ...req.body
    });

    await trip.save();

    res.json(trip);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};


// Get all trips of logged-in user
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id });

    res.json(trips);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};