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
    // console.log(workout);

    return $http.put('/workouts/' + workout.id + '.json', workout).error(function(data) {
      alert('You can only update your own post!')
    }).then(function(response){
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
    return $http.delete('/workouts/' + workout.id + '.json').error(function(data) {
      alert('You can only delete your own post!')
    }).then(function(data) {
      o.workouts.splice(o.workouts.indexOf(workout), 1);
    });
  };

  return o;
}])