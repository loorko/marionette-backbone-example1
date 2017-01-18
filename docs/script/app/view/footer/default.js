define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/footer/default.html' ],
  function( Backbone, Marionette, Handlebars, tmpl ) {
    var FooterView = Marionette.View.extend({
      tagName : 'div',
      id      : 'footer',
      template: Handlebars.compile(tmpl),
    });
    return FooterView;
});