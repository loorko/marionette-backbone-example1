define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/main.html',
          'view/modal/modalLogin' ],
  function( Backbone, Marionette, Handlebars, tmpl, ViewModalLogin ) {
    var MainView = Marionette.View.extend({
      tagName : 'div',
      id      : 'main',
      initialize: function() {
        this.dialog = Backbone.Radio.channel('dialog');
      },
      template: Handlebars.compile(tmpl),
      ui: {
        dialogForm : '.dialog-login-button'
      },
      events: {
        'click @ui.dialogForm' : 'dialogLoginShow'
      },
      dialogLoginShow: function() {
        this.dialog.request('show', new ViewModalLogin());
      }
    });
    return MainView;
});