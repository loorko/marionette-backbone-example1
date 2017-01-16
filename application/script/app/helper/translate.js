define([ 'handlebars' ],
	function( Handlebars ){
		Handlebars.registerHelper('t', function(i18n_key) {
			if(!i18n_key) { return i18n_key; }
			var result = i18next.t(i18n_key);
			return new Handlebars.SafeString(result);
		});
});