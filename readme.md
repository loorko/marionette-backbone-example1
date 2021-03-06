# Example page
## Backbone Marionette

``
npm install && npm run bower
``
* [Underscore](http://underscorejs.org) (v 1.8.3)
* [Jquery](https://jquery.com/) (v 2.2.4)
* [Backbone](http://backbonejs.org) (v 1.2.3)
* [Backbone Radio](https://github.com/marionettejs/backbone.radio) (v 2.0.0)
* [Backbone Syphon](https://github.com/marionettejs/backbone.syphon) (v 0.6.3)
* [Backbone Validation](https://github.com/thedersen/backbone.validation) (v 0.11.5)
* [Marionette](http://marionettejs.com) (v 3.1.0)
* [RequireJS](http://requirejs.org) (v 2.3.2)
* [Handlebars](http://handlebarsjs.com) (v 4.0.5)
* [text](https://github.com/requirejs/text) (v 2.0.15)
* [Bootsrtap](http://getbootstrap.com) (v 3.3.7)
* [i18next](http://i18next.com) (v 5.0.0)
* [i18next xhr backend](https://github.com/i18next/i18next-xhr-backend) (v 1.3.0)

Online: [https://loorko.github.io/marionette-backbone-example1](https://loorko.github.io/marionette-backbone-example1)

## Initial directory structure

~~~~
application/
 ├── index.html
 ├── fonts/
 ├── image/
 ├── script
 |    ├── app
 |    |    ├── collection/
 |    |    ├── component
 |    |    |     ├── dialog.js
 |    |    |     └── loader.js
 |    |    ├── config
 |    |    |     ├── endPoint.js
 |    |    |     └── i18next.js
 |    |    ├── controller/
 |    |    ├── extend
 |    |    |     └── validation.js
 |    |    ├── function/
 |    |    ├── helper
 |    |    |     ├── apiUrl.js
 |    |    |     ├── log.js
 |    |    |     └── translate.js
 |    |    ├── locale
 |    |    |     ├── de
 |    |    |     |    └── translation.json
 |    |    |     └── en
 |    |    |          └── translation.json
 |    |    ├── model/
 |    |    ├── router/
 |    |    ├── template
 |    |    |     ├── component
 |    |    |     |     └── loader.html
 |    |    |     ├── layout/
 |    |    |     └── modal/
 |    |    └── view
 |    |          ├── component
 |    |          |     └── loader.html
 |    |          ├── layout/
 |    |          └── modal/
 |    ├── vendor
 |    |    └── lib/
 |    ├── main.js
 |    ├── config.js
 |    └── main.js
 └── style
      └── css
           ├── lib
           |    └── bootsrtap
           |          └── bootsrtap.min.css
           ├── dashboard.css
           └── system.css
~~~~