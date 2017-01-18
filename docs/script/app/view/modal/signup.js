define( [ 'backbone',
          'marionette',
          'handlebars',
          'text!template/modal/signup.html',
          'helper/translate',
          'validation',
          'syphon',
          'extend/validation' ],
function( Backbone, Marionette, Handlebars, tmpl, translate, Validation, Syphon, BootsrtapValidation ) {

  var RegistrationView = Marionette.View.extend({
    tagName   : 'div',
    className : 'modal fade',
    id        : 'modal',
    initialize: function(){
      Backbone.Validation.bind(this);
      this.dialog = Backbone.Radio.channel('dialog');
    },
    template: function() {
      return Handlebars.compile(tmpl)( { langSelect: [{ "key": "de", "value": "Deutsch" }, { "key": "en", "value": "English" }, { "key": "hu", "value": "Magyar" }] } );
    },
    ui: {
      form        : '#signUpForm',
      signUp      : '#signUpButton',
      closeDialog : '.modalClose'
    },
    events: {
      'click @ui.signUp': 'signUp',
      'click @ui.closeDialog': 'closeDialog'
    },
    signUp: function () {
      var formData = Backbone.Syphon.serialize( this.ui.form );
      this.model.set( formData, { validate: true } );
      if(this.model.isValid()){
        // this.model.save();
        alert('Done');
      }
    },
    closeDialog: function() {
      this.dialog.request('close');
    }
  });

  _.extend(Backbone.Validation.callbacks, BootsrtapValidation);

  return RegistrationView;
});