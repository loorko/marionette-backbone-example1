define( [ 'marionette',
          'handlebars',
          'text!template/layout/default.html' ],
  function( Marionette, Handlebars, tmpl ) {
    var LayoutView = Marionette.View.extend({
      tagName: 'div',
      id     : 'app',
      template: Handlebars.compile(tmpl),
      regions: {
        headerRegion: {
          el: '#header-region'
        },
        mainRegion: {
          el: '#main-region'
        },
        footerRegion: {
          el: '#footer-region'
        },
        dialogRegion: {
          el: '#dialog-region'
        },
        loaderRegion: {
          el: '#loader-region'
        }
      }
    });
    return LayoutView;
});