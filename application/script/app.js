define( ['backbone',
         'component/dialog',
         'view/layout/default',
         'view/main',
         'view/footer'],
function( Backbone, DialogHandler, viewLayout, mainView, footerView ) {

  var Application = Backbone.Marionette.Application.extend({
    region: 'body',
    initialize: function() {
      var main = this.getRegion();
      var view = new viewLayout();
      main.show( view );
    },
    onBeforeStart: function() {
      this.channel = {};
      this.channel.dialogHandler = new DialogHandler( this.getView() );
      
      var layout = this.getView();
      var mainRegion = layout.getRegion('mainRegion');
      mainRegion.show( new mainView() );
      
      var footerRegion = layout.getRegion('footerRegion');
      footerRegion.show( new footerView() );
    },
  
    onStart: function() {
    }
  });
  
  return Application;
});