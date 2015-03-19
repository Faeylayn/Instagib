Instagib.Views.FollowerIndex = Backbone.View.extend({


  render: function () {

    this.$el.html(JST.follower_index({followers: this.collection, user: this.model}));
  }
})
