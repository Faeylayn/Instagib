Instagib.Views.HomeFeed = Backbone.View.extend({
  events: {
    "click .feed-ss": "RequireSignIn",
    "click .sign-up": "SignUpForm",
    "click .login": "LoginForm",
    "click .submit-login": "Login",
    "click .submit-sign-up": "SignUp",
  },

  modal: null,

  initialize: function () {
    this.listenTo(this.collection, "add", this.cycleFeed)
  },

  render: function () {
  this.$el.empty();
  if (Instagib.current_user_id === null) {
    this.$el.append("<a class='login' href='#'>Login</a> OR <a class='sign-up' href='#'>SIGN UP</a> <br>");
  }
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
    this.model = new Instagib.Models.User()
    this.modal = $(".new-user-modal").dialog({
      modal: true,
      height: 450,
      width: 450,
      buttons: {
     "Create an account": this.SignUp.bind(this)
   },
      close: function () {
        $('.new-user-modal').dialog('destroy')
        $('.new-user-modal').remove()

      },

});
  },

  LoginForm: function(event) {
    event.preventDefault();
    this.$el.append(JST.session_new())
    this.model = new Instagib.Models.User()
    this.modal = $(".new-session-modal").dialog({
      modal: true,
      height: 400,
      width: 450,
      buttons: {
     "Log In": this.Login.bind(this)
   },
      close: function () {
        $('.new-session-modal').dialog('destroy')
        $('.new-session-modal').remove()

      },

});
  },

  SignUp: function() {
        var attrs = $("body").find("form").serializeJSON()
        this.model.save(attrs, {
          success: function(){
            $('.new-user-modal').empty()
            $('.new-user-modal').append("<p> Successfully Logged In! Please click <a href=''>here</a> to return </p>")
          }.bind(this),
          error: function (){
            var errors = arguments[1].responseJSON
            $(".validation-tips").text(errors)
          },
        })
  },

  Login: function() {
    var attrs = $("body").find("form").serializeJSON()

    $.ajax({
      url: '/session',
      type: "POST",
      data: attrs,
      dataType: "json",
      success: function(data){
        $('.new-session-modal').empty()
        $('.new-session-modal').append("<p> Successfully Logged In! Please click <a href=''>here</a> to return </p>")
      },
      error: function(){

        var errors = arguments[0].responseText
        $(".validation-tips").text(errors)
      }
    });


  }


})
