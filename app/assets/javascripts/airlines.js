$(document).ready(function() {

    app.reservations = new app.ReservationsCollection();

    app.flight = new app.FlightsCollection();

    var flightRouter = new app.planesRouter();


    app.flight.fetch().done(function() {

        Backbone.history.start();
        
    });

    // Wait until the secretsCollection has finished fetching
    app.reservations.fetch();

    // Polling
    window.setInterval(function() {
        app.reservations.fetch();
    }, 1000);


});
