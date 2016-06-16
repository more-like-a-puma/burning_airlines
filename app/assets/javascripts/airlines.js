

$(document).ready(function() {
  app.reservations = new app.ReservationsCollection();

    var flightRouter = new app.planesRouter();
    Backbone.history.start();

    // Wait until the secretsCollection has finished fetching
    app.reservations.fetch();

    // Polling
    window.setInterval(function () {
      app.reservations.fetch();
    }, 1000);


});



// });
