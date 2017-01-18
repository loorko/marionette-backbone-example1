define( [ 'marionette',
          'view/sidebar/item' ],
function( Marionette, ViewSidebarItem ) {
  var SidebarList = Marionette.CollectionView.extend({
    tagName   : 'ul',
    className : 'nav nav-sidebar',
    childView : ViewSidebarItem
  });
  return SidebarList;
});