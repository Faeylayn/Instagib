Instagib.Collections.SearchResults = Backbone.Collection.extend({
  url: "api/search",

  model: function (attrs) {
		var type = attrs._type;
		return new Instagib.Models[type](attrs);
  }

})
