define(['backbone',
        'helper/apiUrl' ],
  function( Backbone, apiUrl ){
    var Post = Backbone.Model.extend({
      url: function() {
        return apiUrl('post', this.id);
      }
    });
    return Post;
  }
);