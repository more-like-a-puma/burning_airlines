// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchFormView = Backbone.View.extend({

el: '#origin',

initialize: function() {

},

render: function() {
  console.log("Initialization searchFormView");
  // this.collection = new app.FlightsCollection();
  // this.collection.on('click', this.render, this);
  // this.collection.fetch();

}

});
