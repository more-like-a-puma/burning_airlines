// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchFormView = Backbone.View.extend({

el: 'select',

initialize: function() {
    console.log("Initialization searchFormView");
    this.collection = new app.FlightsCollection();
    this.collection.on('focus', this.render, this);
    this.collection.fetch();
}
    // render: function() {
    //     _.each(this.collection.models, function(item) {
    //         this.$el.append(new ItemView({
    //             model: item
    //         }).render().el);
    //     }, this);
    //     return this;
    // }
});
  
