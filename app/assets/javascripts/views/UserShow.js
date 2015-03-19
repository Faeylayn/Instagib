Instagib.Views.UserShow = Backbone.View.extend({

  events: {
    "dblclick .username": "EditUsername",
    "dblclick .email": "EditEmail",
    "dblclick .avatar": "EditAvatar",
    "click .submit": "updateUser",
    "click .follow": "FollowUser",
    "click .unfollow": "UnFollowUser",

  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model.followers(), "add remove", this.render)
  },

  render: function () {

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

  },

  FollowUser: function (event) {
    var follow = new Instagib.Models.Following({
      followed_id: this.model.id,
      follower_id: Instagib.current_user_id
    })
    follow.save({}, {
      success: function () {
        this.model.fetch()
      }.bind(this)
    })
  },

  UnFollowUser: function (event){
    var follower = this.model.followers().get(Instagib.current_user_id)
    var follow = new Instagib.Models.Following({
      id: follower.get("following_id").id
    })
    follow.destroy()

    this.model.followers().remove(follower)

  }

})
