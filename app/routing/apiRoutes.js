const express = require("express");
const friends = require("../data/friends.js");

const router = express.Router();

// Displays a JSON of all possible friends
router.get("/api/friends", function (req, res) {
  return res.json(friends.friendsArray);
});

// Handles incoming survey results - takes in JSON input
router.post("/api/friends", function (req, res) {
  const newFriend = req.body;

  console.log(newFriend);
  res.json(friends.getBestMatch(newFriend));

  friends.friendsArray.push(newFriend);
});

module.exports = router;
