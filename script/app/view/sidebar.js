define([
  'backbone',
  'marionette',
  'handlebars', // http://handlebarsjs.com/
  'text!template/sidebar.html'],
function( Backbone, Marionette, Handlebars, tmpl ) {

  var SidebarView = Marionette.View.extend({
    tagName  : 'div',
    className: 'col-sm-3 col-md-2 sidebar',
    template: function() {
      return Handlebars.compile(tmpl);
    }
  });

  return SidebarView;
});