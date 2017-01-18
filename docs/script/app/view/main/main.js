define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/main/main.html',
          'view/sidebar/sidebar',
          'collection/sidebar' ],
  function( Backbone, Marionette, Handlebars, tmpl, ViewSidebar, CollectionSidebar ) {
    var containerView = Marionette.View.extend({
      tagName   : 'div',
      className : 'container-fluid',
      template  : Handlebars.compile(tmpl),
      regions   : {
        sidebarRegion: {
          el: '#sidebar-region'
        },
        contentRegion: {
          el: '#content-region'
        }
      },
      onRender: function() {
        this.showChildView('sidebarRegion', new ViewSidebar({ collection: CollectionSidebar }));
      }
    });
    return containerView;
});