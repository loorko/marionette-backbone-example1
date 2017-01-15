define( ['backbone',
         'backbone.controller',
         'model/post',
				 'collection/post',
				 'view/post/show',
				 'view/post/list'],
  function( Backbone, Controller, PostModel, PostCollection, viewPostShow, viewPostList ){
    var Post = Backbone.Controller.extend({
      initialize: function() {
				console.log('Controller: Initialized: Post ');
			},
      routes: {
        'posts'           : 'list',
        'post/:id'        : 'show'
      },
      onBeforeRoute: function() {
				console.log('Controller: onBeforeRoute: Post ');
				main = App.getRegion();
				mainRegion = main.currentView.getRegion('mainRegion');
				headerRegion = main.currentView.getRegion('headerRegion');
      },
      // List action
      list: function() {
        var postCollection = new PostCollection();
				postCollection.fetch({
					success: function() {
						var postListView = new viewPostList({ collection: postCollection });
						mainRegion.show( postListView );
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
      },
      // Show action
      show: function(id) {
        var postModel = new PostModel({ "id": id });
				postModel.fetch({
					success: function() {
						var postShowView = new viewPostShow({ model: postModel });
						mainRegion.show( postShowView );
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
      }
    });
    return Post;
  }
);