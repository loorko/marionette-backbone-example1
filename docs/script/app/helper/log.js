define([ 'handlebars' ],
	function( Handlebars ){
		Handlebars.registerHelper('log', function(something) {
			console.log(something);
		});
});