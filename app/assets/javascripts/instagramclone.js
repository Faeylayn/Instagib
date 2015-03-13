window.Instagib = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Instagib.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Instagib.initialize();
});
