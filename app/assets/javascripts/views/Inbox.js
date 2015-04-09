Instagib.Views.Inbox = Backbone.View.extend({


  render: function () {

    this.collection.fetch({
      success: function () {
        this.$el.html(JST.inbox({messages: this.collection, user: this.model}));
      }.bind(this)
    })

  }
})
