//NEEDS A MODEL for a single fligth
var app = app || {}

app.flightDetailsView = Backbone.View.extend({

  el: "#main",

  render: function () {
    console.log("flightDetailsView should be rendered now");
    var flightDetailsTemplate = $("#flightDetailsTemplate").html();
    //Set the HTML of the element with the ID of main  to be that appViewTemplate, making sure to use the keyword `this`
    this.$el.html( flightDetailsTemplate );
    //
    // var SecretInputView = new app.SecretInputView();
    // SecretInputView.render();

  }

});
