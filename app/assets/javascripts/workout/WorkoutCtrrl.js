 function WorkoutCtrl($scope, $state, $stateParams, workouts) {
  
  $scope.workouts = workouts.workouts;

  // $scope.workouts = [{
  //   title: '',
  //   category: '',
  //   exercise: '',
  //   sets: '',
  //   reps: ''
  // }];

  $scope.id = $state.params.id;

  $scope.destroy = function(workout) {
      workouts.destroy(workout);
  };

  $scope.categories = [ 
    {"name" :"Arms"},
    {"name" :"Back"},
    {"name" :"Chest"},
    {"name" :"Legs"},
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

  // $scope.addExercise = function($event) {
  //   $scope.workouts.push({exercise: ''});
  //   $event.preventDefault();
  // }; 

// $scope.addExercise = function() {
//   var newItemNo = $scope.workouts.length+1;
//   $scope.workouts.push({'id':'exercise'+newItemNo});
// };

};

angular 
  .module('app')
  .controller('WorkoutCtrl', WorkoutCtrl);