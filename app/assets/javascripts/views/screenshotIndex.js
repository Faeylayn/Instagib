Instagib.Views.ScreenshotShow = Backbone.View.extend({

  template: JST.screenshot_show({screenshot: this.model}),

  render: function () {
    this.model.fetch({
      success: function () {
        alert("hi!")
      }.bind(this)
    })
  },



})
