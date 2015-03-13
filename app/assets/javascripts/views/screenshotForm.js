Instagib.Views.ScreenshotForm = Backbone.View.extend({

  events: {
    "click .create": "createScreenshot"
  },

  render: function () {
    this.$el.empty();

    this.$el.html(JST.screenshot_form());
  },

  createScreenshot: function(event) {
    event.preventDefault()
    var title = this.$el.find(".new-title").val()
    var url = this.$el.find(".new-url").val()
    var ss = new Instagib.Models.Screenshot({
      title: title,
      image_url: url
    })
    ss.save({}, {
      success: function () {
        ss.fetch ({
          success: function (){
            Backbone.history.navigate("screenshots/"+ ss.get("id"), {trigger: true})
          }
      })
      }
    })
  }



})
