Instagib.Views.MessageShow = Backbone.View.extend({

  events: {
    "click .reply-button": "addReplyForm"
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
  }
})
