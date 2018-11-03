const express = require("express");
const friendsData = require("../data/friends.js");

const router = express.Router();

// Displays a JSON of all possible friends
router.get("/api/friends", function (req, res) {
  return res.json(friendsData);
});

// Handles incoming survey results - takes in JSON input
router.post("/api/friends", function (req, res) {
  const newFriend = req.body;
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friendsData.friendsArray.push(newFriend);

  res.json(newFriend);
});

module.exports = router;
