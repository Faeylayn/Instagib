Instagib.Views.AlbumShow = Backbone.View.extend({

  events: {
    "click .add-ss": "AddToAlbum"
  },

  render: function () {
    this.$el.empty();
    this.model.fetch({
      success: function () {
        this.$el.html(JST.album_show({album: this.model}));
      }.bind(this)
    });
  },

  AddToAlbum: function () {
    this._addSS = null
  },


})
