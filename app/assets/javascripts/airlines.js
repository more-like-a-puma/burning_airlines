app.flight = new app.FlightsCollection();

$(document).ready(function() {

    var flightRouter = new app.planesRouter();
    Backbone.history.start();
    app.flight.fetch();

});
