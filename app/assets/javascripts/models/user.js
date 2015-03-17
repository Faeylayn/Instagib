Instagib.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  albums: function () {
    if (!this._albums) {
      this._albums = new Instagib.Collections.Albums()
    }
    return this._albums
  },

  parse: function (payload) {
    if (payload.albums) {
      this.albums().set(payload.albums)
    }
    return payload
  }
})
