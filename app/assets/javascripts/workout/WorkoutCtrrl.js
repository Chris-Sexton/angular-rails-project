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
      reps: $scope.reps,
      exercise1: $scope.exercise1,
      exercise2: $scope.exercise2,
      exercise3: $scope.exercise3,
      exercise4: $scope.exercise4,
      set1: $scope.set1,
      set2: $scope.set2,
      set3: $scope.set3,
      set4: $scope.set4,
      rep1: $scope.rep1,
      rep2: $scope.rep2,
      rep3: $scope.rep3,
      rep4: $scope.rep4
    });
    $scope.title = '';
    $scope.exercise = '';
    $scope.sets = '';
    $scope.reps = '';
    $scope.exercise1 = '';
    $scope.exercise2 = '';
    $scope.exercise3 = '';
    $scope.exercise4 = '';
    $scope.set1 = '';
    $scope.set2 = '';
    $scope.set3 = '';
    $scope.set4 = '';
    $scope.rep1 = '';
    $scope.rep2 = '';
    $scope.rep3 = '';
    $scope.rep4 = '';
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
  $scope.pageSize = 10;
  $scope.data = [];
  $scope.numberOfPages=function(){
      return Math.ceil($scope.data.length/$scope.pageSize);
  }
  for (var i=0; i<5; i++) {
      $scope.data.push("Item "+i);
  }

  $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }

}

angular
  .module('app')
  .controller('WorkoutCtrl', WorkoutCtrl);