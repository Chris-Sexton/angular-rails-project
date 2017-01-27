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
    {"name" :"Cardio"},
    {"name" :"Abs"},
    {"name" :"Shoulders"}
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

    debugger;
  };

  $scope.update = function(workout) {
    console.log(workout);
    workouts.update(workout);
  };

  $scope.ex1 = false;
    $scope.toggle1 = function() {
        $scope.ex1 = !$scope.ex1;
  };

  $scope.ex2 = false;
    $scope.toggle2 = function() {
        $scope.ex2 = !$scope.ex2;
  };

  $scope.ex3 = false;
    $scope.toggle3 = function() {
        $scope.ex3 = !$scope.ex3;
  };

  $scope.ex4 = false;
    $scope.toggle4 = function() {
        $scope.ex4 = !$scope.ex4;
  };

  $scope.ex5 = false;
    $scope.toggle5 = function() {
        $scope.ex5 = !$scope.ex5;
  };

  $scope.currentPage = 0;
  $scope.pageSize = 5;
  $scope.data = [];
  $scope.numberOfPages=function(){
      return Math.ceil($scope.data.length/$scope.pageSize);
  }
  for (var i=0; i<10; i++) {
      $scope.data.push("Item "+i);
  }

  $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;

}

angular
  .module('app')
  .controller('WorkoutCtrl', WorkoutCtrl);