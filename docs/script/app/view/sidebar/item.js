define([
  'backbone',
  'marionette',
  'handlebars',
  'text!template/sidebar/item.html'],
function( Backbone, Marionette, Handlebars, tmpl ) {
  var SidebarItem = Marionette.View.extend({
    tagName: 'li',
    template: function(model) {
      return Handlebars.compile(tmpl)({ 'menu': model });
    }
  });
  return SidebarItem;
});