define(["backbone","marionette","handlebars","text!template/footer/default.html"],function(e,t,a,n){var o=t.View.extend({tagName:"div",id:"footer",template:a.compile(n)});return o});