console.log("API Route Connected Successfully");


// Lint in friends Data
var friendsdata = require("../data/friends");

// Includes two routes

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsdata);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var scoresArray = [];
        for (let i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        // newFriend.scores = scoresArray;

        // // Cross check the new friend entry with the existing ones
        // var scoreComparisionArray = [];
        // for (var i = 0; i < friendsData.length; i++) {

        //     // Check each friend's scores and sum difference in points
        //     var currentComparison = 0;
        //     for (var j = 0; j < newFriend.scores.length; j++) {
        //         currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
        //     }

        //     // Push each comparison between friends to array
        //     scoreComparisionArray.push(currentComparison);
        // }
    })
}


// Export for use in main server.js file
module.exports = apiRoutes;
