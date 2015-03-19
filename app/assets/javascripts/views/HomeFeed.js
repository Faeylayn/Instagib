Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {

  },

  render: function () {
  this.collection.each(function (screenshot) {
    this.$el.prepend(JST.home_feed({screenshot: screenshot}))
  }.bind(this))
  this.$el.prepend("<h1>Newest Screenshots!</h1>")
  },


})
