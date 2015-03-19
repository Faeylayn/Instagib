Instagib.Views.AlbumAddSS = Backbone.View.extend({

  events: {

  },

  render: function () {

    this.model.fetch({
      success: function () {
        this.$el.html(JST.album_addSS({album: this.model}));
      }.bind(this)
    });
  },




})
