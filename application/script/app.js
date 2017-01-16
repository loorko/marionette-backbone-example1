define( ['backbone',
         'component/dialog',
         'view/layout/default',
         'view/main'],
function( Backbone, DialogHandler, viewLayout, mainView ) {

  var Application = Backbone.Marionette.Application.extend({
    region: 'body',
    initialize: function() {
      var main = this.getRegion();
      var view = new viewLayout();
      main.show( view );
    },
    getCurrentRoute: function(){
      return Backbone.history.fragment;
    },
    navigate: function(route, options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    },
    
    onBeforeStart: function() {
      this.channel = {};
      this.channel.dialogHandler = new DialogHandler( this.getView() );
      
      var layout = this.getView();
      var mainRegion = layout.getRegion('mainRegion');
      mainRegion.show( new mainView() );
    },
  
    onStart: function() {
      
      if(Backbone.history){
        Backbone.history.start();
        // Auth layer
        if(this.getCurrentRoute() === ""){
        //Application.trigger("contacts:list");
        }
      }
    }
  });
  
  return Application;
});