const Match = require("../models/Match");
const calculateScore = require("../utils/matchAlgorithm");

exports.createMatch = async (req, res) => {
  try {
    const { user1, user2 } = req.body;

    const score = calculateScore(user1, user2);

    const match = new Match({
      compatibilityScore: score,
      status: "Pending"
    });

    await match.save();

    res.json(match);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};