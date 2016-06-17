var app = app || {};

app.auxSearchResultView = Backbone.View.extend({

    render: function() {
        var view = this;
        view.template = _.template($("#searchResultTemplate").html());
        app.searchResult.forEach(function(result) {
            var compiledHTML = view.template(result.toJSON());
            $(compiledHTML).prependTo("#searchResultsTabulated");
        });

    }
});
