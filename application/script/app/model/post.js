define(['backbone',
        'helper/apiUrl' ],
  function( Backbone, apiUrl ){
    var Model = Backbone.Model.extend({
      url: function() {
        return apiUrl('post', this.id);
      }
    });
    return Model;
  }
);