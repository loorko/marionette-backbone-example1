define(function(){
  var _apiUrl = 'http://jsonplaceholder.typicode.com/';
  // List of API URLs.
  var URLs = {
    posts: function() {
      return _apiUrl + "posts";
    },
    post: function(id) {
      return _apiUrl + "posts/" + id;
    },
    subscriptions: function(userId, id) {
      return "/api/users/"+ userId +"/subscriptions/" + id;
    }
  };
  return URLs;
});