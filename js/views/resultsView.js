/**
 * Created by akshaykhot on 2016-04-07.
 */

var ResultView = Backbone.View.extend({
    tagName: "li",
    className: "list-group-item center",
    template: _.template($("#scoreTemplate").html()),

    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});

var ResultsView = Backbone.View.extend({
    el: "#res",

    initialize: function() {
        _.bindAll(this, "render");
        this.collection.fetch({ success: this.render });
    },
    render: function() {
        this.collection.each(function(fixture) {
            var resultView = new ResultView({model: fixture});
            this.$el.append(resultView.render().$el);
        }, this);

    }

});

