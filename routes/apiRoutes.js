var friends = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){
		var newFriendScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var bestMatch = 0;
		friends.push(newFriend);
		res.json(newFriend);

		for(var i = 0; i < friends.length; i++){
			var scoresDiff = 0;
			for (var j = 0; j < newFriendScores; j++){
				scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
			}

			scoresArray.push(scoresDiff);
		}

		for(var i = 0; i < scoresArray.length; i++){
			if(scoresArray[i] <= scoresArray[bestMatch]){
				bestMatch = i;
			}
		}

		var bestFriend = friends[bestMatch];
		res.json(bestFriend);
		friends.push(req.body);
	});
};