Instagib.Views.AlbumsIndex = Backbone.View.extend({


  render: function () {
    this.$el.empty();
    this.$el.html(JST.album_index({albums: this.collection, user: this.model}));
  }
})
