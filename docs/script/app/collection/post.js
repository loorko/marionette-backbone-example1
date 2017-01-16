define(['backbone',
        'helper/apiUrl',
        'model/post',],
  function( Backbone, apiUrl, PostModel ){
    var Post = Backbone.Collection.extend({
      url: function() {
        return apiUrl('posts');
      },
      model: PostModel
    });
    return Post;
  }
);