Instagib.Views.UserShow = Backbone.View.extend({

  events: {
    "dblclick .username": "EditUsername",
    "dblclick .email": "EditEmail",
    "dblclick .avatar": "EditAvatar",
    "click .submit": "updateUser"

  },

  render: function () {
    this.$el.empty();
    this.$el.html(JST.user_show({user: this.model}))
  },

  EditUsername: function () {
    if (Instagib.current_user_id === this.model.get("id")) {
      $(".username").html(JST.username_form({user: this.model}))
    }
  },

  EditEmail: function () {
    if (Instagib.current_user_id === this.model.get("id")) {
      $(".email").html(JST.email_form({user: this.model}))
    }
  },

  EditAvatar: function () {
    if (Instagib.current_user_id === this.model.get("id")) {


    }
  },

  updateUser: function (event) {
    event.preventDefault()
    var attr = $("form").serializeJSON();
    this.model.set(attr)
    this.model.save({}, {
      success: function () {
        this.render()
      }.bind(this)
    })

  }

})
