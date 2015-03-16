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
    return payload
  }
})
