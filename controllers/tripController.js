const Trip = require("../models/Trip");

exports.createTrip = async (req, res) => {
  try {
    const trip = new Trip({
      userId: req.user.id,
      ...req.body,
    });

    await trip.save();

    res.json(trip);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getMyTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.id });

    res.json(trips);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
