define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/user/user.html',
          'collection/user',
          'view/user/list' ],
  function( Backbone, Marionette, Handlebars, tmpl, CollectionUser, TableBody ) {
    var UserView = Marionette.View.extend({
      tagName : 'div',
      id      : 'user',
      template: Handlebars.compile(tmpl),
      regions: {
        listRegion: {
          el: 'tbody',
          replaceElement: true
        }
      },
      initialize: function() {
        this.loader = Backbone.Radio.channel('loader');
      },
      onRender() {
        var that = this;
        var collectionUser = new CollectionUser();
				that.loader.request('show');
				collectionUser.fetch({
					success: function() {
            that.showChildView('listRegion', new TableBody({ collection: collectionUser }));
						that.loader.request('hide');
					},
					error: function() {
						console.log("Some error triggered while accessing service api.");
					}
				});
      }
    });
    return UserView;
});