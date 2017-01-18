define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/user/item.html' ],
function( Backbone, Marionette, Handlebars, tmpl ) {
  var UserItem = Marionette.View.extend({
    tagName   : 'tr',
    template: function(model) {
      return Handlebars.compile(tmpl)({ 'user': model });
    }
  });
  return UserItem;
});