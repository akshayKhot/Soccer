/**
 * Created by akshaykhot on 2016-04-03.
 */

var PlayerView = Backbone.View.extend({
    tagName: "div",
    className: "player",
    template: _.template($("#playerTemplate").html()),

    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

var PlayersView = Backbone.View.extend({
    el: "#players",
    listTemplate: _.template($("#listTemplate").html()),
    events: {
        "click #dropdownMenu1": "displayDropdown",
        "click .dropdownPlayer": "displayPlayer"
    },

    initialize: function() {
        _.bindAll(this, "render", "displayDropdown", "displayPlayer");
        this.collection.fetch({ success: this.render });
    },
    render: function() {

        this.$el.append(new PlayerView({model: this.collection.at(6)}).render().$el);
    },
    displayDropdown: function() {
        $("#playerListMenu").empty();
        this.collection.each(function(player) {
            $("#playerListMenu").append(this.listTemplate({name: player.get("name")}));
        }, this);
    },
    displayPlayer: function(e) {

        // Get the clicked player model
        var clickedPlayerModel = this.collection.where({
            name: $(e.target).text()
        })[0];

        // empty the previously loaded player
        this.$(".player").empty();
        this.$el.append(new PlayerView({model: clickedPlayerModel}).render().$el);
    }
});


