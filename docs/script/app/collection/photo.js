define(['backbone',
        'helper/apiUrl',
        'model/photo',],
  function( Backbone, apiUrl, Model ){
    var Collection = Backbone.Collection.extend({
      url: function() {
        return apiUrl('photos');
      },
      model: Model
    });
    return Collection;
  }
);