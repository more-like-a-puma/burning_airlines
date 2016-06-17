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

        console.log("searchResultsView should be rendered now");
        var searchResultsView = $("#searchResultTemplate").html();
        $("#searchResultsTabulated").html(searchResultsView);
        app.origin = $("input[name='origin']").val().toUpperCase();
        app.destination = $("input[name='destination']").val().toUpperCase();
        app.searchResult = app.flight.where({
            origin: app.origin,
            destination: app.destination
        });

        // var aux = this;
        // aux.template = _.template($("auxSearchResultTemplate").html());
        // this.aux.template.render();

        app.renderSearchResults = new app.auxSearchResultView();
        app.renderSearchResults.render();
    }

});
