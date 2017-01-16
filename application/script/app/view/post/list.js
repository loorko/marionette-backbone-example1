define([
  'backbone',
  'marionette',
  'handlebars', // http://handlebarsjs.com/
  //'text!template/post/list.html',
  'view/post/show',
  'helper/log'],
function( Backbone, Marionette, Handlebars, viewPostShow ) {
  var PostList = Marionette.CollectionView.extend({
    tagName: 'div',
    id     : 'postList',
    //childView: new viewPostShow()
    childView: function(item) {
      console.log('childView');
      return viewPostShow; 
    },
    emptyView: function() {
      console.log('emptyView');
    },
  });
  return PostList;
});