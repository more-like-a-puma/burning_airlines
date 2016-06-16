



$(document).ready(function() {
  app.reservations = new app.ReservationsCollection();
  app.flight = new app.FlightsCollection();
    var flightRouter = new app.planesRouter();
    Backbone.history.start();
    app.flight.fetch();

    // Wait until the secretsCollection has finished fetching
    app.reservations.fetch();

    // Polling
    window.setInterval(function () {
      app.reservations.fetch();
    }, 1000);


});
