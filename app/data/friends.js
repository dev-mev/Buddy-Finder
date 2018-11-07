const friendsArray = [
  {
    name: "Sam Goodbuddy",
    photo: "https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Darla Doggy",
    photo: "https://images.pexels.com/photos/264206/pexels-photo-264206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    scores: [
      5,
      2,
      3,
      4,
      1,
      1,
      2,
      3,
      3,
      3
    ]
  },
  {
    name: "Bobby Woof",
    photo: "https://images.pexels.com/photos/64658/pexels-photo-64658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    scores: [
      3,
      3,
      3,
      4,
      2,
      4,
      2,
      1,
      1,
      5
    ]
  }
];

function getBestMatch(currentFriend) {
  let currentBestMatch = null;
  let bestMatchObject;

  for (let i = 0; i < friendsArray.length; i++) {
    // differenceScore = sum of all differences between scores
    let differenceScore = 0;
    for (let n = 0; n < friendsArray[i].scores.length; n++) {
      differenceScore += Math.abs(friendsArray[i].scores[n] - currentFriend.scores[n]);
    }
    // If a better match is found or if currentBestMatch = null, store number in currentBestMatch
    if (currentBestMatch > differenceScore || currentBestMatch === null) {
      currentBestMatch = differenceScore;
      bestMatchObject = friendsArray[i];
    }
  }
  return bestMatchObject;
}

module.exports = { friendsArray, getBestMatch };
