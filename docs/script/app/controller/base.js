define( ['backbone',
         'backbone.controller',
				 'collection/menu',
				 'view/menu/list'],
  function( Backbone, Controller, MenuCollection, viewMenuList ){
    var Base = Backbone.Controller.extend({
      initialize: function() { console.log('Controller: Initialized: Base'); },
      routes: {
        ''      : 'main',
        'main'  : 'main'
      },
      onBeforeRoute: function() {
				console.log('Controller: onBeforeRoute: Base ');
				main = App.getRegion();
				mainRegion = main.currentView.getRegion('mainRegion');
				headerRegion = main.currentView.getRegion('headerRegion');
      },
      // Main Action
      main: function() {
        var menuCollection = new MenuCollection();
        console.log(menuCollection);
				postModel.fetch({
					success: function() {
						var menuListView = new viewMenuList({ collection: menuCollection });
						mainRegion.show( menuListView );
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
      }
    });
    return Base;
  }
);