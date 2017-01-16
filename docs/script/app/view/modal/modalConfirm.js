define([
  'backbone',
  'marionette',
  'handlebars',
  'text!template/modal/modalConfirm.html'],
  function( Backbone, Marionette, Handlebars, tmpl ) {
    var ModalConfirm = Marionette.View.extend({
      el      : '#dialog-region',
      template: Handlebars.compile(tmpl)
    });
    return ModalConfirm;
});