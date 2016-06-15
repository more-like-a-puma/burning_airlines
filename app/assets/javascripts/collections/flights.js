var app = app || {};

app.FlightsCollection = Backbone.Collection.extend({
  url: '/flights',
  model: app.Flight

});
