define([
  'backbone',
  'marionette',
  'handlebars', // http://handlebarsjs.com/
  'text!template/post/show.html',
  'helper/log'],
function( Backbone, Marionette, Handlebars, tmpl ) {
  var PostShow = Marionette.View.extend({
    tagName: 'div',
    id     : 'postShow',
    template: function(model) {
      return Handlebars.compile(tmpl)({ 'post': model });
    }
  });
  return PostShow;
});