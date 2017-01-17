 function WorkoutCtrl($scope, $state, $stateParams, workouts) {
  
  $scope.workouts = workouts.workouts;

  $scope.id = $state.params.id;

  $scope.destroy = function(workout) {
      workouts.destroy(workout);
  };

  $scope.categories = [ 
    {"name" :"Arms"},
    {"name" :"Back"},
    {"name" :"Chest"},
    {"name" :"Legs"},
    {"name" :"Chest & Back"},
    {"name" :"Cardio"},
    {"name" :"Abs"}
  ];

  $scope.incrementUpvotes = function(workout) {
    workouts.upvote(workout);
  };

  $scope.incrementDownvotes = function(workout) {
    workouts.downvote(workout);
  };

  $scope.addWorkout = function() {
    if(!$scope.title || $scope.title === '') { return; }

    workouts.create({
      title: $scope.title,
      category: $scope.category,
      exercise: $scope.exercise,
      sets: $scope.sets,
      reps: $scope.reps
    });
    $scope.title = '';
    $scope.exercise = '';
    $scope.sets = '';
    $scope.reps = '';
  };

};

angular 
  .module('app')
  .controller('WorkoutCtrl', WorkoutCtrl);