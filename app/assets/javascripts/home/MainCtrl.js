function MainCtrl($scope, workouts) {
  
  $scope.workouts = workouts.workouts;

  $scope.destroy = function(workout) {
      workouts.destroy(workout);
  };

  $scope.addWorkout = function() {
    if(!$scope.title || $scope.title === '') { return; }

    workouts.create({
      title: $scope.title
    });
    $scope.title = '';
  };
}

 angular 
  .module('app')
  .controller('MainCtrl', MainCtrl);