define( [ 'backbone',
          'component/dialog',
          'component/loader',
          'router/router',
          'view/layout/default' ],
function( Backbone, DialogHandler, LoaderHandler, Router, ViewLayout ) {

  var Application = Backbone.Marionette.Application.extend({
    region: 'body',
    initialize: function() {
      this.router = new Router();
      var main = this.getRegion();
      main.show( new ViewLayout() );
    },
    
    getCurrentRoute: function(){
      return Backbone.history.fragment;
    },
    navigate: function(route, options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    },
    
    onBeforeStart: function() {
      new DialogHandler( this.getView() );
      new LoaderHandler( this.getView() );
    },
  
    onStart: function() {
      if(Backbone.history){
        Backbone.history.start();
        if(this.getCurrentRoute() === ""){
          Backbone.history.navigate('', {trigger:true});
          // Auth layer
        }
      }
    }
  });
  
  return Application;
});