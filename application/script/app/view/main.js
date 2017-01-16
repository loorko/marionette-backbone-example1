define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/main.html',
          'view/modal/signin',
          'model/signin'],
  function( Backbone, Marionette, Handlebars, tmpl, ViewModalSignIn, ModelSignIn ) {
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
        this.dialog.request('show', new ViewModalSignIn({ model: new ModelSignIn() }));
      }
    });
    return MainView;
});