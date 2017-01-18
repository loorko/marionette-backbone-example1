define( ['marionette',
         'bootstrap',
         'view/component/loader' ],
  function( Marionette, Bootstrap, ViewLoader ) {

  var Loader = Marionette.Object.extend({
    channelName: 'loader',
    initialize: function(getMainView) {
      this.mainView = getMainView;
      if( this.mainView.hasRegion('loaderRegion') ){
        this.loaderRegion = this.mainView.getRegion('loaderRegion');
      }
    },
    radioRequests: {
      'show'  : 'showLoader',
      'hide'  : 'hideLoader'
    },
    showLoader: function() {
      this.loaderRegion.show( new ViewLoader() );
    },
    hideLoader: function() {
      this.loaderRegion.empty();
    }
  });
  return Loader;
});