// 定义入口文件

require.config({
        baseUrl: "./js/",
       // urlArgs:  'v=' + (new Date()).getTime() + Math.random() * 10000,
        paths: {
            'angular': 'http://s1.vued.vanthink.cn/angular.min',
            'angular-route': 'http://s1.vued.vanthink.cn/angular-route',
            'angularAMD': 'http://s1.vued.vanthink.cn/angularAMD.min',
            'ngload' : './lib/' + 'ngload.min',
            'ng-progress': 'http://s1.vued.vanthink.cn/ngprogress.min',
            'vued.cat': './directive/cat',
        },
        shim: {
                'angularAMD': ['angular'],
                'angular-route': ['angular'],
                'ng-progress': ['angular'],
        },
        deps: ['app']
});
