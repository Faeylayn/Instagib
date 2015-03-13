Instagib.Models.Album = Backbone.Model.extend({
  urlRoot: "api/albums",

  screenshots: function () {
    if (!this._screenshots){
      this._screenshots = new Instagib.Collections.Screenshots
    }
    return this._screenshots
  },

  parse: function(payload) {
    if (payload.screenshots) {
      this.screenshots().set(payload.screenshots)
    }
    return payload
  },
})
