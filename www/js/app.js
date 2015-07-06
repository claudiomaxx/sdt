'use strict';

function MeditacoesCtrl($ionicSideMenuDelegate, $scope, $http) {
    
    $scope.items = [1,2,3];
    
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.doRefresh = function() {
        $http.get('/new-items').success(function(newItems) {
            $scope.items = newItems;
        })
        .finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        });
     };
    
}

function RunFn($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
}


function ConfigFn($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: 'home.html'
    })
    .state('music', {
        url: '/music',
        templateUrl: 'music.html'
    });
//    .state('app', {
//        url: "/app",
//        abstract: true,
//        templateUrl: "templates/menu.html",
//        controller: 'AppCtrl'
//    })
//
//    .state('app.meditacoes', {
//        url: "/meditacoes",
//        views: {
//            'menuContent': {
//                templateUrl: "templates/meditacoes.html",
//                controller: 'MeditacoesCtrl'
//            }
//        }
//    })
//
//    .state('app.meditacao', {
//        url: "/meditacoes/:meditacaoId",
//        views: {
//            'menuContent': {
//                templateUrl: "templates/meditacao.html",
//                controller: 'MeditacaoCtrl'
//            }
//        }
//    });
//
//    $urlRouterProvider.otherwise('/app/meditacoes');
}

angular.module('app', ['ionic'])
    .controller('MeditacoesCtrl', MeditacoesCtrl)
    .run(RunFn)
    .config(ConfigFn);
