define([ 'backbone' ],
function( Backbone ){
  var LoginModel = Backbone.Model.extend({
    validation: {
      username: [{
        required: true,
        msg: 'Please enter an username'
      }],
      password: [{
        required: true,
        msg: 'Please enter a password'
      }]
    }
  });
  return LoginModel;
});