Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {

  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.cycleFeed)
  },

  render: function () {
  this.$el.empty();
  this.collection.each(function (screenshot) {
    this.$el.prepend(JST.home_feed({screenshot: screenshot}))
  }.bind(this))
  this.$el.prepend("<h1>Newest Screenshots!</h1>")
  },

  cycleFeed: function () {
    this.render()
  }


})
