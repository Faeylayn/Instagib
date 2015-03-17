Instagib.Views.UserShow = Backbone.View.extend({
  render: function () {
    this.$el.empty();
    this.$el.html(JST.user_show({user: this.model}))
  }

})
