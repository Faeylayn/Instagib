Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {

  },

  render: function () {
    this.$el.html(JST.home_feed({feed: this.collection}))
  },


})
