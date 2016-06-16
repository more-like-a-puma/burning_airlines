// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchResultsView = Backbone.View.extend({


    el: '#origin',

    initialize: function() {
        // this.collection = new app.FlightsCollection();
        this.collection.on('add', this.render, this);
        this.collection.fetch();
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
