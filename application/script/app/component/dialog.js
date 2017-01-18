define( ['marionette',
         'bootstrap'],
  function( Marionette, Bootstrap ) {

  var Dialog = Marionette.Object.extend({
    channelName: 'dialog',
    initialize: function(getMainView) {
      this.mainView = getMainView;
    },
    radioRequests: {
      'show'  : 'showDialog',
      'close' : 'closeDialog'
    },
    ui: {
      modal   : '#modal'
    },
    showDialog: function(view, options) {
      if( this.mainView.hasRegion('dialogRegion') ){
        var dialogRegion = this.mainView.getRegion('dialogRegion');
        if( $('.modal-backdrop').length ){ $('.modal-backdrop').remove(); }
        dialogRegion.show(view);
        if(typeof options !== 'undefined' && options.backdrop){
          $(this.ui.modal).modal({
           'backdrop': options.backdrop
          });  
        }
        $(this.ui.modal).modal('show');
      }
    },
    closeDialog: function() {
      $(this.ui.modal).modal('hide');
      $(this.ui.modal).on('hidden.bs.modal', function () {
        $('#modal').remove();
        if( $('.modal-backdrop').length ){ $('.modal-backdrop').remove(); }
      });
    }
  });
  return Dialog;
});