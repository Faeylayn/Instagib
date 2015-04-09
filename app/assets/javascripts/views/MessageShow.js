Instagib.Views.MessageShow = Backbone.View.extend({

  events: {
    "click .reply-button": "addReplyForm",
    "click .submit-reply": "sendReply"
  },

  render: function () {
    if (Instagib.current_user_id === this.model.get('receiver_id')) {
      this.model.save({received: true}, {
        success: function() {
          this.$el.html(JST.message({message: this.model}));
        }.bind(this)
      })
    } else {
      this.$el.html(JST.message({message: this.model}));
    }

  },

  addReplyForm: function () {
    this.$el.append(JST.reply_form({receiver_id: this.model.get("sender_id"), sender_id: Instagib.current_user_id}))
  },

  sendReply: function(event) {
    event.preventDefault();
    var reply = new Instagib.Models.Message()
    var attrs = $('body').find("form").serializeJSON()
    reply.save(attrs, {
      success: function() {
        Backbone.history.navigate("#/messages", {trigger: true})
      },
      error: function() {
        var errors = arguments[1].responseJSON
        $(".reply-errors-display").text(errors)
      }
    })
  }
})
