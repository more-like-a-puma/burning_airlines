// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchResultsView = Backbone.View.extend({

    el: '#origin',

    events: {
        "submit": "test"
        "cancel": "cancel"
    },

    test: function(event) {
        event.preventDefault();
        alert("lili");
    },

    initialize: function() {
        console.log("Initializing searchResultsView");
        // this.collection = new app.FlightsCollection();
        // this.collection.on('add', this.render, this);
        // this.collection.fetch();
    },

    render: function() {

        console.log("Rendering searchFormView");
        // var searchResultsTemplate = $("#origin").html();
        // this.$el.html(searchResultsTemplate);

    }

});

// var searchResultView = new app.SearchResultsView({
//   collection: app.flights
// })
// searchResultView.render();
