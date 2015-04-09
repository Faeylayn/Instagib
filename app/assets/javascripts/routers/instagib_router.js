Instagib.Router = Backbone.Router.extend({

  routes: {
    '': "HomeFeed",
    "screenshots/new": "ScreenshotForm",
    "screenshots/:id": "ScreenshotShow",
    "albums/new": "AlbumForm",
    "albums/:id": "AlbumShow",
    "users/:id": "UserShow",
    "users/:id/albums": "AlbumsIndex",
    "search": "Search",
    "users/:id/followers": "FollowersIndex",
    "users/:id/followeds": "FollowedsIndex",
    "users/:id/favorites": "UserFavorites",
    "messages": "UserMessages",
    "messages/new": "newMessage",
    "messages/:id": "MessageShow"
  },

  HomeFeed: function () {
    this._homeFeed = new Instagib.Views.HomeFeed({
      collection: new Instagib.Collections.Feed()
    })
    this._homeFeed.collection.fetch({
      success: function () {
        $(".display").html(this._homeFeed.$el);
        this._homeFeed.render();

        this._SwapView(this._homeFeed);
      }.bind(this)
    })
  },

  ScreenshotShow: function (id) {
    var ss = new Instagib.Models.Screenshot({id: id})
    ss.fetch({
      success: function() {
        this._screenshotShow = new Instagib.Views.ScreenshotShow({
          model: ss
        })
        this._screenshotShow.render()
        $(".display").html(this._screenshotShow.$el)
      }.bind(this)

    })
    this._SwapView(this._screenshotShow)
  },

  ScreenshotForm: function () {
    this._screenshotForm = new Instagib.Views.ScreenshotForm({
      model: new Instagib.Models.Screenshot()
    })
    this._screenshotForm.render()
    $(".display").html(this._screenshotForm.$el)
    this._SwapView(this._screenshotForm)
  },

  AlbumForm: function () {
    this._albumForm = new Instagib.Views.AlbumForm()
    this._albumForm.render()
    $(".display").html(this._albumForm.$el)
    this._SwapView(this._albumForm)
  },

  AlbumShow: function (id) {
    var album = new Instagib.Models.Album({id: id})
    album.fetch({
      success: function() {
        this._albumShow = new Instagib.Views.AlbumShow({
          model: album
        })
        this._albumShow.render()
        $(".display").html(this._albumShow.$el)
      }.bind(this)

    })
    this._SwapView(this._screenshotShow)
  },

  UserShow: function (id) {
    var user = new Instagib.Models.User({id: id})
    user.fetch({
      success: function () {
        this._userShow = new Instagib.Views.UserShow({
          model: user
        })
        this._userShow.render();
        $(".display").html(this._userShow.$el)
      }.bind(this)
    })
    this._SwapView(this._userShow)
  },

  AlbumsIndex: function (id) {
    var user = new Instagib.Models.User({id: id})
    user.fetch({
      success: function () {
        this._albumIndex = new Instagib.Views.AlbumsIndex({
          model: user,
          collection: user.albums()
        })
        this._albumIndex.render();
        $(".display").html(this._albumIndex.$el)
      }.bind(this)
    })
    this._SwapView(this._albumIndex)
  },

  Search: function () {
    var view = new Instagib.Views.Search();
    view.render()
    $(".display").html(view.$el)
    this._SwapView(view);
  },

  FollowersIndex: function (id) {
    var user = new Instagib.Models.User({id: id})
    user.fetch({
      success: function () {
        var view = new Instagib.Views.FollowerIndex({
          model: user,
          collection: user.followers()
        })
        view.render()
        $(".display").html(view.$el)
        this._SwapView(view);
      }.bind(this)
    })
  },

  FollowedsIndex: function (id) {
    var user = new Instagib.Models.User({id: id})
    user.fetch({
      success: function () {
        var view = new Instagib.Views.FollowedIndex({
          model: user,
          collection: user.followeds()
        })
        view.render()
        $(".display").html(view.$el)
        this._SwapView(view);
      }.bind(this)
    })
  },

  UserFavorites: function (id) {
    var user = new Instagib.Models.User({id: id})
    user.fetch({
      success: function () {
        var view = new Instagib.Views.Favorites({
          model: user,
          collection: user.favorites()
        })
        view.render()
        $(".display").html(view.$el)
        this._SwapView(view);
      }.bind(this)
    })
  },

  UserMessages: function () {
    var user = new Instagib.Models.User({id: Instagib.current_user_id})
    user.fetch({
      success: function () {
        var view = new Instagib.Views.Inbox({
          model: user,
          collection: new Instagib.Collections.Messages()
        })
        view.render()
        $(".display").html(view.$el)
        this._SwapView(view);
      }.bind(this)
    })
  },

  MessageShow: function (id) {
    var message = new Instagib.Models.Message({id: id})
    message.fetch({
      success: function () {
        if (Instagib.current_user_id != message.get("sender_id") && Instagib.current_user_id != message.get('receiver_id')) {
          Backbone.history.navigate("#", {trigger: true})
          alert("You are not the sender or receiver of that Message")
        } else {
        var view = new Instagib.Views.MessageShow({
          model: message
        })
        view.render()
        $(".display").html(view.$el)
        this._SwapView(view);
      }
      }.bind(this)
    })

  },

  newMessage: function () {
    var view = new Instagib.Views.NewMessage({
      model: new Instagib.Models.Message({
        sender_id: Instagib.current_user_id
      })
    })
    view.render()
    $(".display").html(view.$el)
    this._SwapView(view);
  },


  _SwapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    };
    this.currentView = newView;
  },


})
