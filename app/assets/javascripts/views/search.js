Instagib.Views.Search = Backbone.View.extend({

  events: {
    "change .query": "search",
  },

  initialize: function () {
    this.searchResults = new Instagib.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  render: function () {
    this.$el.html(JST.new_search({results: this.searchResults}))
  },


  search: function (event) {
		event.preventDefault();
		this.searchResults.query = this.$(".query").val();

		this.searchResults.fetch({
			data: {
				query: this.searchResults.query,
			}
		});
	},

})
