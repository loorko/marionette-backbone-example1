define([ 'config/endPoint' ],
	function( URLs ){
		var apiUrl = function(type) {
		  return URLs[type] ?
	    URLs[type].apply(this, [].slice.call(arguments, 1)) :
	    undefined;
		};
		return apiUrl;
	}
);