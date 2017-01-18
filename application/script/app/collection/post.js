define(['backbone',
        'helper/apiUrl',
        'model/post',],
  function( Backbone, apiUrl, Model ){
    var Collection = Backbone.Collection.extend({
      url: function() {
        return apiUrl('posts');
      },
      model: Model
    });
    return Collection;
  }
);