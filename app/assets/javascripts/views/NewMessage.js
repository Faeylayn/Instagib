Instagib.Views.NewMessage = Backbone.View.extend({

  events: {

  },

  render: function () {

    var user = new Instagib.Models.User({id: Instagib.current_user_id})
    user.fetch({
      success: function () {
        this.collection = user.followers()
        this.collection.add(user.followeds())
        this.$el.html(JST.message_form({collection: this.collection}));
      }.bind(this)
    })
  },
})
