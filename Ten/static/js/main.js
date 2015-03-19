require.config({
	paths:{
        'angular': 'angular.min',
        'angular-route': 'angular-route',
        'angularAMD': 'angularAMD.min'
	},
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
    deps: ['app'],
    urlArgs: "v=" + (new Date()).getTime()
});