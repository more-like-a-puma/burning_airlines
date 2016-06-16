// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchResultsView = Backbone.View.extend({

    el: '#searchResultsTabulated',

    events: {

        "submit": "test"
    },

    test: function(event) {
        event.preventDefault();
        console.log("Lile");
    },

    render: function() {

        console.log("searchResultsView should be rendered now");
        var searchResultsView = $("#searchResultTemplate").html();
        this.$el.html(searchResultsView);

    }

});
