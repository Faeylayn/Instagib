Instagib.Views.ScreenshotShow = Backbone.View.extend({

  events: {
    "click .add-comment": "CommentForm",
    "click .reply-comment": "CommentReply",
    "click .submit-new": "submitNew",
    "click .submit-reply": "submitReply",
    "click .delete-comment": "deleteComment",
    "click .add-tag": "TagForm",
    "click .submit-tag": "submitTag",
    "click .remove-tag": "deleteTag",
    "click .ss-img": "CreateModal",
    "click .fav": "FavSS",
    "click .unfav": "UnFavSS",
  },

  initialize: function () {
    this.listenTo(this.model.comments(), "add remove", this.render),
    this.listenTo(this.model.tags(), "add remove", this.render)
  },

  render: function () {
    this.model.fetch({
      success: function () {
        this.$el.html(JST.screenshot_show({screenshot: this.model}));
      }.bind(this)
    });
  },

  CommentForm: function (event) {
    event.preventDefault()
    $(".comments").prepend(JST.new_comment({commentID: null}))
    $(event.currentTarget).prop('disabled', true)
  },

  CommentReply: function (event) {
    event.preventDefault()
    $("#"+$(event.currentTarget).attr("data-id")).prepend(JST.new_comment({commentID: $(event.currentTarget).attr("data-id")}))
    $(event.currentTarget).prop('disabled', true)
  },

  submitNew: function (event) {
    event.preventDefault()
    var content = this.$el.find(".new-content").val()
    var comm = new Instagib.Models.Comment ({
      content: content,
      ss_id: this.model.id,
      author_id: Instagib.current_user_id
    })
    comm.save({}, {
      success: function () {
        this.model.comments().add(comm)
      }.bind(this)
    })
  },

  submitReply: function (event) {
    event.preventDefault()
    var content = this.$el.find(".new-content").val()
    var comm = new Instagib.Models.Comment ({
      content: content,
      ss_id: this.model.id,
      author_id: Instagib.current_user_id,
      parent_id: $(event.currentTarget).attr("data-id")
    })
    comm.save({}, {
      success: function () {
        this.model.comments().add(comm)
      }.bind(this)
    })
  },

  deleteComment: function (event) {
    event.preventDefault()
    var comment = new Instagib.Models.Comment ({
      id: $(event.currentTarget).attr("data-id")
    })
    comment.destroy({
      success: function () {

        var comm = this.model.comments().get(comment)
        var parent = this.model.comments().get(comm.get("parent_id"))
        if (parent) {
          parent.children().remove(comm)
        } else {
          this.model.topLevelComments().remove(comm)
        }
        this.model.comments().remove(comm)

        // this.render()
      }.bind(this)
    })
  },

  TagForm: function (event) {
    event.preventDefault()
    $(".tags").prepend(JST.new_tag({screenshot: this.model}))
    $(event.currentTarget).prop('disabled', true)
  },


  submitTag: function (event) {
    event.preventDefault()
    var attr = $(".tag-form").serializeJSON()
    console.log(attr);
    var tag = new Instagib.Models.Tag()
    tag.save(attr, {
      success: function () {
        this.model.tags().add(tag)
      }.bind(this)
    })
  },

  deleteTag: function (event) {
    event.preventDefault()
    var tag = new Instagib.Models.Tag ({
      id: $(event.currentTarget).attr("data-id"),
    })

    tag.destroy({
        data: "ss_id="+ this.model.id ,
      success: function () {
        tag = this.model.tags().get(tag)
        this.model.tags().remove(tag)
      }.bind(this)
    })
  },

  CreateModal: function () {
    this.$el.append("<img class='ss-modal' src=" + this.model.get("picture") + "/>");
    $('.ss-modal').dialog({
      modal: true,
      height: 'auto',
      width: 'auto',
      close: function () {
        $('.ss-modal').dialog('destroy')
        $('.ss-modal').remove()
      },

});

  },
  FavSS: function (event) {
    var fav = new Instagib.Models.Favorite({
      ss_id: this.model.id,
      user_id: Instagib.current_user_id
    })
    fav.save({}, {
      success: function () {
        this.render()
      }.bind(this)
    })
  },

  UnFavSS: function (event){
    var faver = this.model.favoritedUsers().get(Instagib.current_user_id)
    var fav = new Instagib.Models.Favorite({
      id: faver.get("favorite_id").id
    })
    fav.destroy()

    this.render()

  }

})
