/**
 * Created by akshaykhot on 2016-04-03.
 */

$.ajaxSetup({
    headers: { 'X-Auth-Token': '2b0fd684e54f44e2832cb0b6df30ee98' }
});

var BASE_URL = "http://api.football-data.org";

var PlayerModel = Backbone.Model.extend({
    defaults: {
        "name": "Marc-André ter Stegen",
        "position": "Keeper",
        "jerseyNumber": 1,
        "dateOfBirth": "1992-04-30",
        "nationality": "Germany",
        "contractUntil": "2019-06-30",
        "marketValue": "15,000,000 "
    }
});

var PlayersCollection = Backbone.Collection.extend({
    url: BASE_URL + "/v1/teams/81/players",
    model: PlayerModel,

    parse: function(response) {
        return response.players;
    }
});

var catalons = new PlayersCollection();
