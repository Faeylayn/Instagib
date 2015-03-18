Instagib.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  albums: function () {
    if (!this._albums) {
      this._albums = new Instagib.Collections.Albums()
    }
    return this._albums
  },

  followers: function () {
    if (!this._followers) {
      this._followers = new Instagib.Collections.Users()
    }
    return this._followers
  },

  followeds: function () {
    if (!this._followeds) {
      this._followeds = new Instagib.Collections.Users()
    }
    return this._followeds
  },


  parse: function (payload) {
    if (payload.albums) {
      this.albums().set(payload.albums)
    }
    if (payload.followers) {
      this.followers().set(payload.followers)
    }
    if (payload.followeds) {
      this.followeds().set(payload.followeds)
    }
    return payload
  }
})
