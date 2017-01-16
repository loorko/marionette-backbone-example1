define( ['backbone',
         'controller/base',
         'controller/post'],
  function( Backbone, controllerBase, controllerPost ){
    var Router = Backbone.Router.extend({
      controllers: {},
      initialize: function() {
        this.controllers.base = new controllerBase({router: this});
        this.controllers.post = new controllerPost({router: this});
      }
      // Ne kapcsold be!!
      //execute: function(callback, args, name) {}
    });
    return Router;
  }
);