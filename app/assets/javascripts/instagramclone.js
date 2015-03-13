window.Instagib = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Instagib.Router()
  }
};

$(document).ready(function(){
  Instagib.initialize();
});
