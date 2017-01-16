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
          controller: 'MainCtrl'
        })

        .state('workouts', {
          url: '/workouts',
          templateUrl: 'workout/_workout.html',
          controller: 'WorkoutCtrl',
          resolve: {
            workoutPromise: ['workouts', function(workouts){
              return workouts.getAll();
            }]
          }
        })

        .state('create', {
          url: '/new',
          templateUrl: 'workout/_workoutNew.html',
          controller: 'WorkoutCtrl',
          resolve: {
            workoutPromise: ['workouts', function(workouts){
              return workouts.getAll();
            }]
          }
        })

        .state('workouts.show', {
          url: '/{id}',
          templateUrl: 'workout/_workoutShow.html',
          controller: 'WorkoutCtrl',
          resolve: {
            workoutPromise: ['workouts', function(workouts){
              return workouts.getAll();
            }]
          }
        })

        .state('categories', {
          url: '/categories',
          templateUrl: 'category/_category.html',
          controller: 'CategoryCtrl',
          resolve: {
            categoryPromise: ['categories', function(categories){
              return categories.getAll();
            }]
          }
        })

        .state('categories.show', {
          url: '/{id}',
          templateUrl: 'category/_categoryShow.html',
          controller: 'CategoryCtrl',
          resolve: {
            categoryPromise: ['categories', function(categories){
              return categories.getAll();
            }]
          }
        });

      $urlRouterProvider.otherwise('home');
    }])