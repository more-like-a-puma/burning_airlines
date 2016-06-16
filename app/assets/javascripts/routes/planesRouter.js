var app = app || {};

app.planesRouter = Backbone.Router.extend({

    routes: {
        "" : "showSearchPage",
        "flight/:id" : "flightDetails"
    },

    showSearchPage: function () {
      console.log("mmimmi");
      var showSearchPage = new app.searchResultsView();
      showSearchPage.render();
    },

    showFlight: function (id) {
      console.log( id );
    },

    index: function() {
        console.log("index");
        // $("#main").html("<h4>"+"Index");
    },

    flightDetails: function(id) {
        console.log("flightDetailsMessage" + id);
        // var flightDetailsView = new app.flightDetailsView();
        // flightDetailsView.render();
    },

    naivgationMessage: function() {
        console.log("naivgationMessage");
    },

    reservationMessage: function() {
        console.log("reservationMessage");
    },

    searchFormMessage: function() {
        console.log("searchFormMessage");
    },

    searchResultMessage: function() {
        console.log("searchResultMessage");
    },

    seatMessage: function() {
        console.log("seatMessage");
    }

});
