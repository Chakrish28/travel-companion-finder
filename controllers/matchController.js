const Match = require("../models/Match");
const calculateScore = require("../utils/matchAlgorithm");

exports.createMatch = async (req, res) => {
  try {
    const score = calculateScore(req.body.user1, req.body.user2);

    const match = new Match({
      user1: req.body.user1,
      user2: req.body.user2,
      compatibilityScore: score,
    });

    await match.save();

    res.json(match);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
