Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {
    "click .feed-ss": "RequireSignIn",
    "click .sign-up": "SignUpForm",
    "click .login": "LoginForm",
    "click .submit-login": "Login",
    "click .submit-sign-up": "SignUp",
  },

  initialize: function () {
    this.listenTo(this.collection, "add", this.cycleFeed)
  },

  render: function () {
  this.$el.empty();
  this.$el.append("<a class='login' href='#'>Login</a> OR <a class='sign-up' href='#'>SIGN UP</a> <br>");
  this.$el.append("<ul class='feed'></ul>");
  this.collection.each(function (screenshot) {
    $(".feed").prepend(JST.home_feed({screenshot: screenshot}))
  }.bind(this))

  },

  cycleFeed: function () {
    $(".feed-ss-container").toggleClass("feed-mover")
    $("feed").prepend(JST.new_home_feed_ss({screenshot: this.collection.last()}))
    setTimeout(function () {
      $(".feed-new-ss").toggleClass("feed-new-ss-mover")
    }, 1)
    setTimeout(function () {
      $(".feed-new-ss").toggleClass("feed-new-ss-mover")
      $(".feed-new-ss").toggleClass("feed-new-ss")
      $(".feed-mover").toggleClass("feed-mover")
      if (this.collection.length > 4) {
        $(".feed > :last-child").remove()
      }
    }.bind(this), 1000)
  },

  SignUpForm: function(event) {
    event.preventDefault();
    this.$el.append(JST.user_new())
    $(".new-user-modal").dialog({
      modal: true,
      height: 400,
      width: 450,
      close: function () {
        $('.new-user-modal').dialog('destroy')
        $('.new-user-modal').remove()
        this.render();
      }.bind(this),

});
  },

  LoginForm: function(event) {
    event.preventDefault();
    this.$el.append(JST.session_new())
    $(".new-session-modal").dialog({
      modal: true,
      height: 400,
      width: 450,
      close: function () {
        $('.new-session-modal').dialog('destroy')
        $('.new-session-modal').remove()
        this.render();
      }.bind(this),

});
  },

  SignUp: function(event) {
    event.preventDefault();
    var attrs = 
    var user = new Instagib.Models.User({

    })
  }


})
