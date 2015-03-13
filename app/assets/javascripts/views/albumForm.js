Instagib.Views.AlbumForm = Backbone.View.extend({

  events: {
    "click .create": "createAlbum"
  },

  render: function () {
    this.$el.empty();
    this.$el.html(JST.album_form());
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
  }



})
