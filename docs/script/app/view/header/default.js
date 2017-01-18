define( [ 'marionette',
          'handlebars',
          'text!template/header/default.html' ],
  function( Marionette, Handlebars, tmpl ) {
    var HeaderView = Marionette.View.extend({
      tagName   : 'div',
      className : 'navbar navbar-inverse navbar-fixed-top',
      template  : Handlebars.compile(tmpl),
      ui: {
        logout: '.logout'
      },
      events: {
        'click @ui.logout': 'logout'
      },
      logout: function () {
        Backbone.history.navigate('', {trigger:true});
      }
    });
    return HeaderView;
});