Instagib.Views.AlbumsIndex = Backbone.View.extend({

  events: {
    "click .add-album-form": "appendForm",
    "click .create": "createAlbum"
  },

  render: function () {

    this.$el.html(JST.album_index({albums: this.collection, user: this.model}));
  },

  appendForm: function (event) {
    $(event.currentTarget).prop('disabled', true)
    this.$el.append(JST.album_form());
  },

  createAlbum: function(event) {
    event.preventDefault()
    var title = this.$el.find(".new-title").val()
    var album = new Instagib.Models.Album({
      title: title,
    })
    album.save({}, {
      success: function () {
        album.fetch ({
          success: function (){
            Backbone.history.navigate("albums/"+ album.get("id"), {trigger: true})
          }
      })
      }
    })
  },


})
