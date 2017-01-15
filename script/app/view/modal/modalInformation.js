define([
  'backbone',
  'marionette',
  'handlebars',
  'text!template/modal/modalInformation.html'],
  function( Backbone, Marionette, Handlebars, tmpl ) {
    var ModalInformation = Marionette.View.extend({
      tagName   : 'div',
      className : 'modal',
      id        : 'modal',
      template  : Handlebars.compile(tmpl)
    });
    return ModalInformation;
});