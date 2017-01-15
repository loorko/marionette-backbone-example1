require( ['jquery',
          'marionette',
          'handlebars',
          'app',
          'i18next',
          'i18next-xhr-backend',
          'config/i18next'],
  function( $, Marionette, Handlebars, Application, i18next, i18nextXhrBackend, i18nextConfig ) {
    window.i18next = i18next || 'hu';
    i18next.use(i18nextXhrBackend).init(i18nextConfig);
    i18next.on('loaded', function() {
      window.App = new Application();
      App.start();
    });  
  }
);