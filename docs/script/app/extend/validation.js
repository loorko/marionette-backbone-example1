define([ 'handlebars' ],
  function( Handlebars ){
    return{
      valid: function (view, attr, selector) {
        var $el = view.$('[name=' + attr + ']'), 
            $group = $el.closest('.form-group');    
        $group.removeClass('has-error');
        $group.find('.help-block').html('').addClass('hidden');
      },
      invalid: function (view, attr, error, selector) {
        var $el = view.$('[name=' + attr + ']'),
            $group = $el.closest('.form-group');
        $group.addClass('has-error');
        $group.find('.help-block').html( Handlebars.compile("{{ t error }}")({ 'error': error }) ).removeClass('hidden');
      }
    };
});