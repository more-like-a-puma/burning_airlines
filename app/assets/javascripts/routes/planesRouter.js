var app = app || {};

app.planesRouter = Backbone.Router.extend({

    routes: {
        "": "showSearchPage",
        "flight/:id": "flightDetails",
    },

    showSearchPage: function() {
        var showSearchPage = new app.searchResultsView();
        showSearchPage.render();
    },

    showFlight: function(id) {
        console.log(id + "Jane");
    },

    index: function() {
        console.log("index");
    },

    flightDetails: function(id) {
        console.log("flightDetailsMessage " + id);
        var seatViewDetails = new app.reservationView();
        seatViewDetails.render();
    }

});
