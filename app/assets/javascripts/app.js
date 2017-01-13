angular
  .module('app', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            workoutPromise: ['workouts', function(workouts){
              return workouts.getAll();
            }]
          }
        });

      $urlRouterProvider.otherwise('workouts');
    }])