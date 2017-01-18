define( [	'backbone',
					'backbone.controller',
					'view/header/default',
					'view/main/main',
					'view/dashboard/dashboard',
					'view/user/user',
					'view/user/list',
					'collection/user'	],
  function( Backbone, Controller, ViewHeder, ViewMain, ViewDashboard, ViewUser ){
    var Base = Backbone.Controller.extend({
      routes: {
        'dashboard'	: 'dashboard',
				'users'  		: 'users'
      },
      onBeforeRoute: function() {
				this.loader = Backbone.Radio.channel('loader');
				
				this.layout = App.getView();
				//this.headerRegion = this.layout.getRegion('headerRegion');
				//this.headerRegion.show( new ViewHeder() );
				this.layout.getRegion('headerRegion').show( new ViewHeder() );
				this.mainRegion = this.layout.getRegion('mainRegion');
				this.mainRegion.show( new ViewMain() );

				//this.mainRegionCurrentView = this.mainRegion.currentView;
				this.contentRegion = this.mainRegion.currentView.getRegion('contentRegion');				
      },
      // Dashboard Action
      dashboard: function() {
				this.contentRegion.show( new ViewDashboard() );
      },
			// Users Action
      users: function() {
				this.contentRegion.show( new ViewUser() );
			}
    });
    return Base;
  }
);