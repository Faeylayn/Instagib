window.Instagib = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Instagib.Router();
    Backbone.history.start();
  },
  current_user_id: null
};

$(document).ready(function(){
  Instagib.initialize();
});
