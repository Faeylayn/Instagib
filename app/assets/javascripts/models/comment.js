Instagib.Models.Comment = Backbone.Model.extend({
  urlRoot: "api/comment",

  children: function () {
    if (!this._children) {
      this._children = new Instagib.Collections.Comments()
    }
    return this._children
  }
})
