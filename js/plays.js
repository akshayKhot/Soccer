/**
 * Created by akshaykhot on 2016-04-07.
 */

//var fixturesURL = BASE_URL + "/v1/teams/81/fixtures";
//var scoreTemplate = _.template($("#scoreTemplate").html());
//$.ajax({
//    url: fixturesURL,
//    dataType: "json",
//    success: function(resp) {
//        var matches = resp.fixtures;
//        for(var i=0; i<matches.length; i++) {
//            if(matches[i].status === "FINISHED") {
//                $("#res").append(scoreTemplate({
//                    homeTeam: matches[i].homeTeamName,
//                    awayTeam: matches[i].awayTeamName,
//                    homeTeamGoals: matches[i].result.goalsHomeTeam,
//                    awayTeamGoals: matches[i].result.goalsAwayTeam
//                }));
//            } else {
//                $("#fix").append(scoreTemplate({
//                    homeTeam: matches[i].homeTeamName,
//                    awayTeam: matches[i].awayTeamName,
//                    homeTeamGoals: matches[i].result.goalsHomeTeam,
//                    awayTeamGoals: matches[i].result.goalsAwayTeam
//                }));
//            }
//        }
//
//    },
//    error: function() {
//        console.log("something went wrong");
//    }
//});
