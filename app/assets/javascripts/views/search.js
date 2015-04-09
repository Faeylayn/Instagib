Instagib.Views.Search = Backbone.View.extend({

  events: {
    "change .query": "search",
  },

  query: '',

  initialize: function () {
    this.searchResults = new Instagib.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  render: function () {
    this.$el.html(JST.new_search({results: this.searchResults}))
    $(".query").val(this.query)
  },


  search: function (event) {
		event.preventDefault();
		this.query = $(".query").val();

		this.searchResults.fetch({
			data: {
				query: this.query,
			}
		});
	},

})
