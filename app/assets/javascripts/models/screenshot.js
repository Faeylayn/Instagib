Instagib.Models.Screenshot = Backbone.Model.extend({
  urlRoot: "api/screenshots",

  comments: function () {
    if (!this._comments) {
      this._comments = new Instagib.Collections.Comments()
    }
    return this._comments
  },

  topLevelComments: function () {
    if (!this._topLevelComments) {
      this._topLevelComments = new Instagib.Collections.Comments()
    }
    return this._topLevelComments
  },

  tags: function () {
    if (!this._tags) {
      this._tags = new Instagib.Collections.Tags()
    }
    return this._tags
  },

  gameTag: function () {
    if (!this._gameTag) {
      this._gameTag = new Instagib.Models.GameTag()
    }
    return this._gameTag
  },

  favoritedUsers: function () {
    if (!this._favoritedUsers) {
      this._favoritedUsers = new Instagib.Collections.Users()
    }
    return this._favoritedUsers
  },

  isFavorited: function (id) {
    return this.favoritedUsers().get(id)
  },

  parse: function (payload) {
    if (payload.comments) {
      this.comments().set(payload.comments)
      this.comments().each(function (comment) {
        if (!comment.get("parent_id")) {
          this.topLevelComments().add(comment)
        } else {
          var parent = this.comments().get(comment.get("parent_id"))
          parent.children().add(comment)
        }

      }.bind(this))

    }
    if (payload.tags) {
      this.tags().set(payload.tags)
    }
    if (payload.game_tag) {
      this.gameTag().set(payload.game_tag)
    }
    if (payload.favorited_users) {
      this.favoritedUsers().set(payload.favorited_users)
    }
    return payload
  },

  toJSON: function () {
    return {
      screenshot: _.clone(this.attributes)
    };
  },
})
