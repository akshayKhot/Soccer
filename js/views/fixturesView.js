/**
 * Created by akshaykhot on 2016-04-07.
 */

var FixtureView = Backbone.View.extend({
    tagName: "li",
    className: "list-group-item center",
    template: _.template($("#fixtureTemplate").html()),

    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

var FixturesView = Backbone.View.extend({
    el: "#fix",

    initialize: function() {
        _.bindAll(this, "render");
        this.co
    },
    render: function() {

    }
});