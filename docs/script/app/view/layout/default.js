define( [ 'marionette',
          'handlebars',
          'text!template/layout/default.html' ],
  function( Marionette, Handlebars, tmpl, ViewModalInformation, ViewModalConfirm, ViewModalForm, ViewModalAlert, modelSignUp ) {
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
        dialogRegion: {
          el: '#dialog-region'
        }
      }
    });
    return LayoutView;
});