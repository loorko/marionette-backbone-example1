define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/modal/signin.html',
          'helper/translate',
          'validation',
          'syphon',
          'extend/validation',
          'view/modal/signup',
          'model/signup'  ],
  function( Backbone, Marionette, Handlebars, tmpl, translate, Validation, Syphon, BootsrtapValidation, ViewModalSignUp, ModelSignUp ) {
    var ModalLogin = Marionette.View.extend({
      tagName   : 'div',
      className : 'modal fade',
      id        : 'modal',
      initialize: function() {
        this.dialog = Backbone.Radio.channel('dialog');
        Backbone.Validation.bind(this);
      },
      template  : Handlebars.compile(tmpl),
      ui: {
        form        : '#signInForm',
        signIn      : '#signIn',
        signUpShow  : '#signUpShow',
        signInClose : '#signInClose',
      },
      events: {
        'click @ui.signIn'     : 'signIn',
        'click @ui.signUpShow' : 'signUpShow',
        'click @ui.signInClose': 'signInClose'
      },
      signIn: function () {
        var formData = Backbone.Syphon.serialize( this.ui.form );
        this.model.set( formData, { validate: true } );
        if(this.model.isValid()){
          // this.model.save();
          alert('Done');
        }
      },
      signUpShow: function() {
        this.dialog.request('close');
        this.dialog.request('show', new ViewModalSignUp({ model: new ModelSignUp() }));
      },
      signInClose: function() {
        this.dialog.request('close');
      }
    });
    
    _.extend(Backbone.Validation.callbacks, BootsrtapValidation);
    
    return ModalLogin;
});