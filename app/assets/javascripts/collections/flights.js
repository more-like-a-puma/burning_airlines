var app = app || {};

app.FlightsCollection = Backbone.Collection.extend({

    url: '/flights',

    model: app.Flight,

    events: {
        'click button': 'selectDestination'
    },

    selectDestination: function() {
        console.log("A secret should be created");

        var flight = new app.Flight();
    },


});
