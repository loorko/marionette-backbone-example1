define(['backbone',
        'helper/apiUrl',
        'model/user',],
  function( Backbone, apiUrl, Model ){
    var Collection = Backbone.Collection.extend({
      url: function() {
        return apiUrl('users');
      },
      model: Model
    });
    return Collection;
  }
);