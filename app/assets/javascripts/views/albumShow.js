Instagib.Views.AlbumShow = Backbone.View.extend({

  events: {
    "click .add-ss": "AddToAlbum",
    "click .submit-add": "AddtheSS",
    "click .remove-ss": "removeSS",
    "click .album-ss": "goToSS"
  },

  initialize: function () {
    this.listenTo(this.model.screenshots(), "add remove", this.render)
  },

  render: function () {
    this.$el.empty();
    this.model.fetch({
      success: function () {
        this.$el.html(JST.album_show({album: this.model}));
      }.bind(this)
    });
  },

  AddToAlbum: function (event) {
    event.preventDefault()
    $(event.currentTarget).prop('disabled', true)
    this._addSS = new Instagib.Views.AlbumAddSS({
      model: this.model,
      collection: this.model.other_ss()
    })
    this._addSS.render()
    setTimeout(function () {this.$el.append(this._addSS.$el)}.bind(this), 0)
  },

  AddtheSS: function (event) {
    event.preventDefault()
    var $form = $(".add-more-ss")
    var new_ids = $form.find(".added-ss:checked")
    for (var i = 0; i < new_ids.length; i++) {
      var new_ss = new Instagib.Models.Screenshot({
        id: $(new_ids[i]).val(),
        album_id: this.model.id,
        })
      new_ss.save({}, {
        success: function () {
          this.model.screenshots().add(new_ss)
        }.bind(this)
      })
    }
  },

  removeSS: function (event) {
    event.preventDefault()

    var remove_ss = new Instagib.Models.Screenshot({id: $(event.target).data("id")})
    remove_ss.fetch({
      success: function () {
        remove_ss.set({album_id: null});
        remove_ss.save({}, {
          success: function () {this.model.screenshots().remove(remove_ss)}.bind(this)
        })
      }.bind(this)
    })
  },

  goToSS: function (event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id")
    Backbone.history.navigate("screenshots/" + id, {trigger: true})
  }


})
