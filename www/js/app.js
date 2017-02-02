// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ion-floating-menu']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'ListaTarefasCtrl'
        }
      }
    })
    .state('tabs.adicionar', {
      url: "/adicionar",
      views: {
        'home-tab': {
          templateUrl: "templates/adicionar.html",
          controller: 'ListaTarefasCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

});

app.controller('ListaTarefasCtrl', function($scope, $location){
  var tasks = new getTasks();

  $scope.showFinished = false;
  $scope.list = tasks.items;

  $scope.onClickTask = function (item) {
    item.finished = !(item.finished);
    tasks.save();
  };

  $scope.onItemAdd = function (item) {
    if(item.titulo !== '') {
      tasks.add(angular.copy(item));
      tasks.save();
      item.titulo = '';
      item.descricao = '';
    }
  };

  $scope.onHideItem = function (item) {
    return item.finished && !$scope.showFinished;
  };

  $scope.onItemDelete = function (item) {
    tasks.remove(item);
    tasks.save();
  };

  $scope.go = function (path) {
    $location.path(path);
  };

  /* LIST ATRIBUTES*/
  $scope.data = {
    showDelete: false
  };
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.list.splice(fromIndex, 1);
    $scope.list.splice(toIndex, 0, item);
  };
});
