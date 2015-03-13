Instagib.Models.Album = Backbone.Model.extend({
  urlRoot: "api/albums",

  screenshots: function () {
    if (!this._screenshots){
      this._screenshots = new Instagib.Collections.Screenshots
    }
    return this._screenshots
  },

  other_ss: function () {
    if (!this._other_ss){
      this._other_ss = new Instagib.Collections.Screenshots
    }
    return this._other_ss
  },

  parse: function(payload) {
    if (payload.screenshots) {
      this.screenshots().set(payload.screenshots)
    }
    if (payload.owners_stuff) {
      this.other_ss().set(payload.owners_stuff)
    }
    return payload
  },
})
