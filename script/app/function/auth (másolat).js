define(function () {
	//Auth: function () {
	function Auth() {
		console.log('Auth function start');
		var auth = $.Deferred();
		setTimeout(function() {
			auth.resolve();
			console.log('Auth done');
		}, 5000);
		return auth.promise();
	}
	return Auth;
});