Instagib.Router = Backbone.Router.extend({

  routes: {
    "screenshots/new": "ScreenshotForm",
    "screenshots/:id": "ScreenshotShow",

  },

  ScreenshotShow: function (id) {
    var ss = new Instagib.Models.Screenshot({id: id})
    ss.fetch({
      success: function() {
        this._screenshotShow = new Instagib.Views.ScreenshotShow({
          model: ss
        })
        this._screenshotShow.render()
        $(".display").html(this._screenshotShow.$el)
      }.bind(this)

    })

  }

})
