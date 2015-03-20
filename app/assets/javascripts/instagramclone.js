window.Instagib = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Instagib.Router();


    Backbone.history.start();
    var channel = window.pusher.subscribe('screenshots');

    channel.bind('new_ss', function(data) {
      var ss = new Instagib.Models.Screenshot(data);
      router._homeFeed.collection.add(ss);
    });
  },
  current_user_id: null
};

$(document).ready(function(){
  Instagib.initialize();
});
