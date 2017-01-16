define([
  'backbone',
  'marionette',
  'handlebars',
  'text!template/modal/modalAlert.html'],
  function( Backbone, Marionette, Handlebars, tmpl ) {
    var ModalAlert = Marionette.View.extend({
      //el: '#dialog-region',
      template: Handlebars.compile(tmpl)
    });
    return ModalAlert;
});