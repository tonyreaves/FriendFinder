//load data
var friendsArray = require("../data/friends");
var bestFriend = require("../data/friends");

//routing
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
        res.json(true);
    });


    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // req.body is available since we're using the body-parser middleware
        userData.push(req.body);
        res.json(true);

    });

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friendsArray = [];

        console.log(friendsArray);
    });

};
