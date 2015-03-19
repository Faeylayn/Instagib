Instagib.Views.Favorites = Backbone.View.extend({

  events: {
    "click .unfav": "unFav"
  },

  initialize: function () {
    this.listenTo(this.collection, "remove", this.render)
  },

  render: function () {

    this.$el.html(JST.favorites({favorites: this.collection, user: this.model}));
  },

  unFav: function (event) {
    var fav_id = $(event.currentTarget).data("id")
    var ss = this.collection.get(fav_id)
    var fav = new Instagib.Models.Favorite({
      id: ss.get("favorite_id").id
    })
    fav.destroy()
    this.collection.remove(ss)
  }
})
