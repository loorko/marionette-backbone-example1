define([
  'backbone',
  'marionette',
  'handlebars', // http://handlebarsjs.com/
  'text!template/navbar.html'],
function( Backbone, Marionette, Handlebars, tmpl ) {

  var NavbarView = Marionette.View.extend({
    tagName  : 'nav',
    className: 'navbar navbar-inverse navbar-fixed-top',
    template: function() {
      return Handlebars.compile(tmpl);
    }
  });

  return NavbarView;
});