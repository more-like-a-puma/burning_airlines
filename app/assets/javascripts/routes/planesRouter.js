// Namespace our flowerApp
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
    },

    flightDetailsMessage: function() {
        console.log("flightDetailsMessage");
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
