module.exports = function calculateScore(user1, user2) {

  let score = 0;

  // Destination match
  if (user1.destination === user2.destination) {
    score += 40;
  }

  // Travel style match
  if (user1.travelStyle === user2.travelStyle) {
    score += 20;
  }

  // Budget similarity
  if (Math.abs(user1.budget - user2.budget) <= 1000) {
    score += 20;
  }

  // Interest matching
  const commonInterests = user1.interests.filter(i =>
    user2.interests.includes(i)
  );

  score += commonInterests.length * 10;

  return Math.min(score, 100);
};