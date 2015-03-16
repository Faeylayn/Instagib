Instagib.Views.ScreenshotShow = Backbone.View.extend({

  events: {
    "click .add-comment": "CommentForm",
    "click .reply-comment": "CommentReply",
    "click .submit-new": "submitNew",
    "click .submit-reply": "submitReply"
  },

  initialize: function () {
    this.listenTo(this.model.comments(), "add", this.render)
  },

  render: function () {
    this.$el.empty();
    this.model.fetch({
      success: function () {
        this.$el.html(JST.screenshot_show({screenshot: this.model}));
      }.bind(this)
    });
  },

  CommentForm: function (event) {
    event.preventDefault()
    $(".comments").prepend(JST.new_comment())
    $(event.currentTarget).prop('disabled', true)
  },

  CommentReply: function (event) {
    event.preventDefault()
    $("#"+$(event.currentTarget).attr("data-id")).prepend(JST.new_comment())
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
  }


})
