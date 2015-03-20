Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {

  },

  tagName: "ul class='feed'",

  initialize: function () {
    this.listenTo(this.collection, "add", this.cycleFeed)
  },

  render: function () {
  this.$el.empty();
  this.collection.each(function (screenshot) {
    this.$el.prepend(JST.home_feed({screenshot: screenshot}))
  }.bind(this))

  },

  cycleFeed: function () {
    $(".feed-ss-container").toggleClass("feed-mover")
    this.$el.prepend(JST.new_home_feed_ss({screenshot: this.collection.last()}))
    setTimeout(function () {
      $(".feed-new-ss").toggleClass("feed-new-ss-mover")
    }, 1)
    setTimeout(function () {
      $(".feed-new-ss").toggleClass("feed-new-ss-mover")
      $(".feed-new-ss").toggleClass("feed-new-ss")
      $(".feed-mover").toggleClass("feed-mover")
      if (this.collection.length > 4) {
        $(".feed > :last-child").remove()
      }
    }.bind(this), 1000)
  }


})
