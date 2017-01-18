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
    comments: function() {
      return _apiUrl + "comments";
    },
    comment: function(id) {
      return _apiUrl + "comments/" + id;
    },
    albums: function() {
      return _apiUrl + "albums";
    },
    album: function(id) {
      return _apiUrl + "albums/" + id;
    },
    photos: function() {
      return _apiUrl + "photos";
    },
    photo: function(id) {
      return _apiUrl + "photos/" + id;
    },
    users: function() {
      return _apiUrl + "users";
    },
    user: function(id) {
      return _apiUrl + "users/" + id;
    },
    subscriptions: function(userId, id) {
      return "/api/users/"+ userId +"/subscriptions/" + id;
    }
  };
  return URLs;
});