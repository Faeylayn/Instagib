Instagib.Views.UserShow = Backbone.View.extend({

  events: {
    "dblclick .username": "EditUsername",
    "dblclick .email": "EditEmail",
    "dblclick .avatar": "EditAvatar"

  },

  render: function () {
    this.$el.empty();
    this.$el.html(JST.user_show({user: this.model}))
  },

  EditUsername: function () {
    if (Instagib.current_user_id === this.model.get("id")) {
      $(".username").html(JST.username_form())
    }
  },

  EditEmail: function () {
    if (Instagib.current_user_id === this.model.get("id")) {

    }
  },

  EditAvatar: function () {
    if (Instagib.current_user_id === this.model.get("id")) {

    }
  },

})
