define([
  'backbone',
  'marionette',
  'handlebars',
  'text!template/modal/modalLogin.html',
  'view/modal/modalRegister',
  'model/signUp'],
  function( Backbone, Marionette, Handlebars, tmpl, ViewModalRegister, ModelSignUp ) {
    var ModalRegister = Marionette.View.extend({
      tagName   : 'div',
      className : 'modal fade',
      id        : 'modal',
      initialize: function() {
        this.dialog = Backbone.Radio.channel('dialog');
      },
      template  : Handlebars.compile(tmpl),
      ui: {
        dialogShow  : '.dialog-register-button',
        dialogClose : '.dialog-register-close-button'
      },
      events: {
        'click @ui.dialogShow' : 'dialogShow',
        'click @ui.dialogClose': 'dialogClose'
      },
      dialogShow: function() {
        this.dialog.request('close');
        this.dialog.request('show', new ViewModalRegister({ model: new ModelSignUp() }));
      },
      dialogClose: function() {
        console.log('close');
        this.dialog.request('close');
      }
    });
    return ModalRegister;
});