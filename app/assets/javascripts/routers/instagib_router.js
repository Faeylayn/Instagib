Instagib.Router = Backbone.Router.extend({

  routes: {
    "screenshots/new": "ScreenshotForm",
    "screenshots/:id": "ScreenshotShow",
    "albums/new": "AlbumForm",
    "albums/:id": "AlbumShow",
    "users/:id": "UserShow",
    "users/:id/albums": "albumsIndex",

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
    this._screenshotForm = new Instagib.Views.ScreenshotForm()
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
  },


  _SwapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    };
    this.currentView = newView;
  }

})
