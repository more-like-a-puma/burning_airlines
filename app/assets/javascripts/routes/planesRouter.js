var app = app || {};

app.planesRouter = Backbone.Router.extend({

    routes: {
        "": "index",
        "flightDetailsView": "flightDetailsMessage",
        "navigationView": "naivgationMessage",
        "reservationView": "reservationMessage",
        "searchFormView": "searchFormMessage",
        "searchResultView": "searchResultMessage",
        "seatView": "seatMessage"
    },

    index: function() {
        console.log("index");
        $("#main").html("<h4>"+"Index");
    },

    flightDetailsMessage: function() {
        console.log("flightDetailsMessage");
        var flightDetailsView = new app.flightDetailsView();
        flightDetailsView.render();
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
