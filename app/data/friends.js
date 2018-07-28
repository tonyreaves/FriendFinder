var friendsArray = [
    {
    "name":"Ahmed",
  "photo":"https://library.stanford.edu/sites/default/files/person/image/img_0017.jpg",
    "scores":[
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
  "name":"Georgia",
"photo":"https://www.rover.com/blog/wp-content/uploads/2017/06/pug-puppy-960x540.jpg",
  "scores":[
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

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

// for each friend in friendsArray

var lowestSoFar = 100;
var bestFriend = "";