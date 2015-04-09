Instagib.Views.ScreenshotForm = Backbone.View.extend({

  events: {
    "click .create": "createScreenshot",
    "change .picture-input": "changePicture"
  },

  render: function () {

    this.$el.html(JST.screenshot_form());
  },

  createScreenshot: function(event) {
    event.preventDefault()
    var attr = this.$el.find("form").serializeJSON()
    var ss = this.model
    ss.save(attr, {
      success: function () {
        ss.fetch ({
          success: function (){
            Backbone.history.navigate("screenshots/"+ ss.get("id"), {trigger: true})
          }
      })
      }
    })
  },

  changePicture: function (event) {

    var file = event.currentTarget.files[0];

    var fileReader = new FileReader();

    var that = this;
    fileReader.onloadend = function () {
      that.model.set("picture", fileReader.result);
      that.previewPic(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  },

  previewPic: function (src) {
    this.$("#picture-preview").attr("src", src);
  }



})
