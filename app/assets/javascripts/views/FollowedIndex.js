Instagib.Views.FollowedIndex = Backbone.View.extend({


  render: function () {
    this.$el.empty();
    this.$el.html(JST.followed_index({followeds: this.collection, user: this.model}));
  }
})
