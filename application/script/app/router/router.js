define( [ 'backbone',
          'controller/default',
          'controller/base' ],
  function( Backbone, controllerDefault, controllerBase ){
    var Router = Backbone.Router.extend({
      controllers: {},
      initialize: function() {
        this.controllers.default = new controllerDefault({router: this});
        this.controllers.base = new controllerBase({router: this});
      }
      // Ne kapcsold be!!
      //execute: function(callback, args, name) {}
    });
    return Router;
  }
);