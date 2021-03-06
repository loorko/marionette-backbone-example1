({
  appDir: './',
  baseUrl: './',
  dir: './dist',
  modules: [{
    name: 'main'
  }],
  fileExclusionRegExp: /^(r|build)\.js$/,
  optimizeCss: 'standard',
  removeCombined: true,
  paths: {
    // define application paths
    'app'                 : 'app',
    'router'              : 'app/router',
    'controller'          : 'app/controller',
    'model'               : 'app/model',
    'collection'          : 'app/collection',
    'view'                : 'app/view',
    'template'            : 'app/template',
    'component'           : 'app/component',
    // define vendor paths
    // libraries
   'jquery'              : 'vendor/lib/jquery/jquery.min',
   'underscore'          : 'vendor/lib/underscore/underscore-min',
   'backbone'            : 'vendor/lib/backbone/backbone-min',
   'backbone.controller' : 'vendor/lib/backbone.controller/backbone.controller',
   'marionette'          : 'vendor/lib/backbone.marionette/backbone.marionette.min',
   'backbone.radio'      : 'vendor/lib/backbone.radio/backbone.radio',
   'handlebars'          : 'vendor/lib/handlebars/handlebars.min',
   'bootstrap'           : 'vendor/lib/bootstrap/bootstrap.min',
   'validation'          : 'vendor/lib/backbone-validation/backbone-validation-amd-min',
   'syphon'              : 'vendor/lib/backbone.syphon/backbone.syphon.min',
   // plugins
   'text'                : 'vendor/lib/text/text',
   'i18next'             : 'vendor/lib/i18next/i18next.min',
   'i18next-xhr-backend' : 'vendor/lib/i18next-xhr-backend/i18nextXHRBackend.min',
   // config
   'config'              : 'app/config',
   // helper
   'helper'              : 'app/helper',
   // extend
   'extend'              : 'app/extend',
   // function
   'function'            : 'app/function'
  },
  shim: {
    'jquery': {
        exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      exports:  'Backbone',
      deps:   [ 'jquery', 'underscore' ]
    },
    'backbone.radio': {
      exports:  'Backbone.Radio',
      deps:   [ 'backbone' ]
    },
    'backbone.controller': {
      exports:  'Backbone.Controller',
      deps:   [ 'underscore', 'backbone' ]
    },
    'marionette': {
      exports:  'Marionette',
      deps:   [ 'underscore', 'backbone', 'jquery' ]
    },
    'handlebars': {
      exports:  'Handlebars',
      deps:   []
    },
    'bootstrap': {
      exports:  'Bootstrap',
      deps:   [ 'jquery']
    },
    'i18next': {
      exports:  'i18next',
      deps:   [ 'i18next-xhr-backend' ]
    },
    'validation': {
      exports:  'Validation',
      deps:   [ 'underscore', 'backbone' ]
    },
    'syphon': {
      exports:  'syphon',
      deps:   [ 'underscore', 'backbone' ]
    }
  }
})