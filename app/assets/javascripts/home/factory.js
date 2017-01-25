angular.module('app')
.factory('workouts', ['$http', '$stateParams', function($http, $stateParams){
  var o = {
    workouts: []
  };

   o.getAll = function() {
    return $http.get('/workouts.json').then(function(data){
      angular.copy(data, o.workouts);
    });
  };

  o.create = function(workout) {
    return $http.post('/workouts.json', workout).then(function(data){
      o.workouts.push(data);
    });
  };

  o.update = function(workout) {

    return $http.put('/workouts/' + workout.id + '.json', workout).then(function(response){
      return response.data;
    });
  };

  o.get = function(id) {
    return $http.get('/workouts/' + id + '.json').then(function(res) {
      return res.data;
    });
  };

  o.upvote = function(workout) {
    return $http.put('/workouts/' + workout.id + '/upvote.json')
      .then(function(data){
        workout.upvotes += 1;
      });
  };

  o.downvote = function(workout) {
    return $http.put('/workouts/' + workout.id + '/downvote.json')
      .then(function(data){
        workout.downvotes += 1;
      });
  };

  o.destroy = function(workout) {
    return $http.delete('/workouts/' + workout.id + '.json').then(function(data) {
      o.workouts.splice(o.workouts.indexOf(workout), 1);
    });
  };

  return o;
}])