Instagib.Collections.Feed = Backbone.Collection.extend({
  url: "api/screenshots",

  model: Instagib.Models.Screenshot,

  comparator: "created_at",


})
