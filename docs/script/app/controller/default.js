define( [	'backbone',
					'backbone.controller',
					'view/welcome' ],
  function( Backbone, Controller, ViewWelcome ){
    var Default = Backbone.Controller.extend({
      routes: {
				""  				: 'welcome',
        //'welcome'  	: 'welcome',
				//".*" : 'notFound'
      },
      onBeforeRoute: function() {
				this.layout = App.getView();
				var headerRegion = this.layout.getRegion('headerRegion');
				headerRegion.empty();
      },
      // Welcome Action
      welcome: function() {
				var mainRegion = this.layout.getRegion('mainRegion');
				mainRegion.show( new ViewWelcome() );
      },
      // notFound Action
      notFound: function() {
				console.log('not found action');
				//var mainRegion = this.layout.getRegion('mainRegion');
				//mainRegion.show( new ViewWelcome() );
      }
    });
    return Default;
  }
);