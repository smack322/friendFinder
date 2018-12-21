// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req, res) {

        

        //convert array of strings into array of numbers from the form

        var userFriend = req.body.score;
        console.log(userFriend);

        //nested for loop to compare the form array of numbers against each array of numbers per name
        var friend = 0;
        var lowestScore = 100;
        

        for (i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;
            for (j = 0; j < userFriend.length; j++) {
                 totalDifference += Math.abs(parseInt(userFriend[j]) - friendsData[i].scores[j]);
            
            }
            console.log(totalDifference);
            if (totalDifference < lowestScore) {
                lowestScore = totalDifference
                friend = friendsData[i];
            }
        }
        
        // for loop to compare the differences between userFriend and friendsData smallest number is closest match

        res.json(friend);
    });

}

