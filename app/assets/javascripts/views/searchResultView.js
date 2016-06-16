// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchResultsView = Backbone.View.extend({

    el: '#searchForm',


    events: {

        "click button#submit": "doSearch"

    },

    doSearch: function(events) {
        event.preventDefault();
        this.exeSearch();
        // ---------------------------------------
        // prevent refresh
        // take the values from both search boxes
        // search all your models and return those that match
        // ---------------------------------------


        // render from those results to the page

    },

    exeSearch: function() {
      app.origin = $("input[name='origin']").val();
      app.destination = $("input[name='destination']").val();
      app.flight.findWhere({ destination: app.destination, origin: app.origin });
        console.log("searchResultsView should be rendered now");
        var searchResultsView = $("#searchResultTemplate").html();
        $("#searchResultsTabulated").html(searchResultsView);
    }

});
