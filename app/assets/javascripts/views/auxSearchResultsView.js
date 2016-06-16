var app = app || {};

app.auxSearchResultView = Backbone.View.extend({


    render: function() {

        app.searchResult = app.flight.findWhere({
            origin: app.origin,
            destination: app.destination
        });
        console.log(app.searchResult);
        // debugger;
        app.searchResult.collection.each(function(result) {
            debugger
            var $li = $("<li>");
            $li.text(result.findWhere({destination: app.destination}));
            $li.prependTo("#fligthsResults");
            console.log($li);

        });

    }
});
