define(['backbone',
        'helper/apiUrl',
        'model/album',],
  function( Backbone, apiUrl, Model ){
    var Collection = Backbone.Collection.extend({
      url: function() {
        return apiUrl('albums');
      },
      model: Model
    });
    return Collection;
  }
);