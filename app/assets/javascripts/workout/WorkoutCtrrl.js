function WorkoutCtrl($scope, $state, $stateParams, workouts) {
  
  $scope.workouts = workouts.workouts;

  $scope.id = $state.params.id;

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
  .controller('WorkoutCtrl', WorkoutCtrl);