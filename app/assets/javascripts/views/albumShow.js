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

  AddToAlbum: function (event) {
    event.preventDefault()
    this._addSS = new Instagib.Views.AlbumAddSS({
      model: this.model,
      collection: this.model.other_ss()
    })
    this._addSS.render()
    setTimeout(function () {this.$el.append(this._addSS.$el)}.bind(this), 0)
  },


})
