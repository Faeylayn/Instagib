Instagib.Views.ScreenshotShow = Backbone.View.extend({

  render: function () {
    this.$el.empty();
    this.model.fetch({
      success: function () {
        this.$el.html(JST.screenshot_show({screenshot: this.model}));
      }.bind(this)
    });
  },



})
