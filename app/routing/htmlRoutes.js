//dependency
var path = require("path");


//routing
module.exports = function (app) {

    //set main page to home.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // /survey is routed to survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // // anything else defaults to home.html
    // app.get("*", function(req, res) {
    // //     res.sendFile(path.join(__dirname, "../public/home.html"));
    //   });

}