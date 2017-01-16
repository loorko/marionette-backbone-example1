define([ 'backbone' ],
function( Backbone ){
  var SignUpModel = Backbone.Model.extend({
    validation: {
      username: [{
        required: true,
        msg: 'Please enter an username'
      },{
        minLength: 5,
        msg: 'Not enough length (min 5 character)'
      },{
        maxLength: 25,
        msg: 'Too length (max 25 character)'
      }],
      email: [{
        required: true,
        msg: 'Please enter an email address'
      },{
        pattern: 'email',
        msg: 'Please enter a valid email'
      }],
      password: [{
        required: true,
        msg: 'Please enter a password'
      },{
        minLength: 8,
        msg: 'Not enough length (min 8 character)'
      }],
      repeatPassword: {
        equalTo: 'password',
        msg: 'The passwords does not match'
      },
      language: [{
        required: true,
        msg: 'Please select a language'
      },{
        oneOf: ['de', 'en', 'hu'],
        msg: 'Please select a language'
      }],
      age: [{
        required: true,
        msg: 'Please enter your age'
      },{
        pattern: 'digits',
        msg: 'Please enter a valid number'
      },{
        range: [18, 100],
        msg: 'Please enter a number between 18 and 100'
      }],
      terms: {
        acceptance: true,
        msg: 'Please terms of services'
      }
    }
  });
  return SignUpModel;
});