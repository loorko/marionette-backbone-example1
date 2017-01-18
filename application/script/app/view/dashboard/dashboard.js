define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/dashboard/dashboard.html',
          'collection/post',
          'collection/comment',
          'collection/album',
          'collection/photo'  ],
  function( Backbone, Marionette, Handlebars, tmpl, CollectionPost, CollectionComment, CollectionAlbum, CollectionPhoto ) {
    var DashboardView = Marionette.View.extend({
      tagName : 'div',
      id      : 'dashboard',
      template: Handlebars.compile(tmpl),
      ui: {
        postsNumber     : '#postsNumber',
        commentsNumber  : '#commentsNumber',
        albumsNumber    : '#albumsNumber',
        photosNumber    : '#photosNumber'
      },
      onAttach: function() {
        var that = this;
        var collectionPost = new CollectionPost();
				collectionPost.fetch({
					success: function() {
						$(that.ui.postsNumber).html(collectionPost.length);
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
        
        var collectionComment = new CollectionComment();
				collectionComment.fetch({
					success: function() {
						$(that.ui.commentsNumber).html(collectionComment.length);
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
        
        var collectionAlbum = new CollectionAlbum();
				collectionAlbum.fetch({
					success: function() {
						$(that.ui.albumsNumber).html(collectionAlbum.length);
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});

        var collectionPhoto = new CollectionPhoto();
				collectionPhoto.fetch({
					success: function() {
						$(that.ui.photosNumber).html(collectionPhoto.length);
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
      }
    });
    return DashboardView;
});