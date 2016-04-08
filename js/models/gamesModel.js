/**
 * Created by akshaykhot on 2016-04-07.
 */

var GameModel = Backbone.Model.extend({});
var GamesCollection = Backbone.Collection.extend({
    url: BASE_URL + "/v1/teams/81/fixtures",
    model: GameModel,

    parse: function(response) {
        return response.fixtures;
    }
});

var games = new GamesCollection();