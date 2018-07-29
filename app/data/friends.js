
var friendsArray = [
  {
    "name": "Ahmed",
    "photo": "https://library.stanford.edu/sites/default/files/person/image/img_0017.jpg",
    "scores": [
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
  }, {
    "name": "Georgia",
    "photo": "https://www.rover.com/blog/wp-content/uploads/2017/06/pug-puppy-960x540.jpg",
    "scores": [
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
  },

];


var surveyStub = {
  name: '',
  photo: '',
  scores: [
    5, 1, 3, 4, 5, 6, 7, 8, 9, 0
  ]
};

// This is looking at just the scores part of the friendsArray.
// Taking the number and index and then substracting it from the new data from the survey page.
// Takes the absolute number of those and gives us an array of score differences
var scoreDifferences = friendsArray.map(({ scores }) => (
  scores.map((number, index) => (Math.abs(surveyStub.scores[index] - number)))
));

// console.log({ scoreDifferences });
// process.exit();

// Takes the sum of those differences and makes an array of those organized by friend.
var friendAbsoluteDifference = scoreDifferences.map((friend) => (
  friend.reduce((acc, number) => (acc + number), 0)
));

// console.log({friendAbsoluteDifference});

// Returns the index from the friendAway of the friend with the lowest difference (number)
var winnerIndex = friendAbsoluteDifference.indexOf(Math.min.apply(null, friendAbsoluteDifference));

// The object representing the winner
var bestFriend = friendsArray[winnerIndex];
var bestFriendPhoto = friendsArray[winnerIndex].photo;

// console.log({ winnerIndex, bestFriend });

// // for each friend in friendsArray
// for (var i = 0; i < friends.length; i++)
// {for (var i=0; i < scores.length; i_++)
// if Math.abs(scores[i]-this.scores[i]);
// }
// var lowestSoFar = 100;
// var bestFriend = "";

// Note how we export the array. This makes it accessible to other files using require.
module.exports = {
  bestFriend
};

// friendsArray.push(userData);