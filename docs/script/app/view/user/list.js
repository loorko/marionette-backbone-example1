define( [ 'backbone',
          'marionette',
          'handlebars',
          'view/user/item' ],
function( Backbone, Marionette, Handlebars, viewUserItem ) {
  var UserList = Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: function(item) {
      return viewUserItem;
    },
    emptyView: function() {
      console.log('emptyView');
    },
  });
  return UserList;
});