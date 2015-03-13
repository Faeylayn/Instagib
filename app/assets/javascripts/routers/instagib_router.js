Instagib.Router = Backbone.Router.extend({

  routes: {
    "screenshots/new": "ScreenshotForm",
    "screenshots/:id": "ScreenshotShow",

  },

  ScreenshotShow: function (id) {
    var ss = new Instagib.Models.Screenshot({id: id})
    this._screenshotShow = new Instagib.Views.ScreenshotShow({
      model: ss
    })
    this._screenshotShow.render()
  }

})
