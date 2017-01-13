angular.module('app')
.factory('workouts', ['$http', function($http){
  var o = {
    workouts: []
  };

   o.getAll = function() {
    return $http.get('/workouts.json').success(function(data){
      angular.copy(data, o.workouts);
    });
  };

  o.create = function(workout) {
    return $http.post('/workouts.json', workout).success(function(data){
      o.workouts.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/workouts/' + id + '.json').then(function(res) {
      return res.data;
    });
  };

  o.destroy = function(workout) {
    return $http.delete('/workouts/' + workout.id + '.json').success(function(data) {
      o.workouts.splice(o.workouts.indexOf(workout), 1);
    });
  };

  return o;
}])