Instagib.Collections.Feed = Backbone.Collection.extend({
  url: "api/screenshots",

  model: Instagib.Models.Screenshot,

  comparator: function (ss) {
    return ss.get("created_at")
  }


})
