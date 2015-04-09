Instagib.Views.MessageShow = Backbone.View.extend({


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
})
