// SHOW SEARCH RESULTS => FLIGHT COLLECTION
var app = app || {};

app.searchResultsView = Backbone.View.extend({

    el: '#searchForm',

    events: {

        "click button#submit" : "doSearch"

    },

    doSearch: function(events) {
        event.preventDefault();
        this.exeSearch();
    },

    exeSearch: function () {
        console.log("Fabio");
    },


    render: function() {

        console.log("searchResultsView should be rendered now");
        var searchResultsView = $("#searchResultTemplate").html();
        $("#searchResultsTabulated").html(searchResultsView);

    }

});
