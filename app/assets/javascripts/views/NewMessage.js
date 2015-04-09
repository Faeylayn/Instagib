Instagib.Views.NewMessage = Backbone.View.extend({

  events: {
    "click .submit-message": "SendMessage"
  },

  render: function() {

    var user = new Instagib.Models.User({id: Instagib.current_user_id})
    user.fetch({
      success: function () {
        this.collection = user.followers()
        this.collection.add(user.followeds())
        this.$el.html(JST.message_form({collection: this.collection}));
      }.bind(this)
    })
  },

  SendMessage: function(event) {
    event.preventDefault();
    var attrs = $('body').find("form").serializeJSON()
    this.model.save(attrs, {
      success: function() {
        Backbone.history.navigate("#/messages", {trigger: true})
      },
      error: function() {
        var errors = arguments[1].responseJSON
        $(".errors-display").text(errors)
      }
    })
  }
})
