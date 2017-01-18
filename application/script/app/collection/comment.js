define(['backbone',
        'helper/apiUrl',
        'model/comment',],
  function( Backbone, apiUrl, Model ){
    var Collection = Backbone.Collection.extend({
      url: function() {
        return apiUrl('comments');
      },
      model: Model
    });
    return Collection;
  }
);