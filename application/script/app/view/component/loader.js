define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/component/loader.html' ],
  function( Backbone, Marionette, Handlebars, tmpl ) {
    var LoaderView = Marionette.View.extend({
      tagName : 'div',
      id      : 'loader',
      template: Handlebars.compile(tmpl),
    });
    return LoaderView;
});