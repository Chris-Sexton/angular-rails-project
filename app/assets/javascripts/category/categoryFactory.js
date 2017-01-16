angular.module('app')
.factory('categories', ['$http', function($http){
  var o = {
    categories: []
  };

   o.getAll = function() {
    return $http.get('/categories.json').success(function(data){
      angular.copy(data, o.categories);
    });
  };

  o.create = function(workout) {
    return $http.post('/categories.json', workout).success(function(data){
      o.categories.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/categories/' + id + '.json').then(function(res) {
      return res.data;
    });
  };

  o.destroy = function(category) {
    return $http.delete('/categories/' + category.id + '.json').success(function(data) {
      o.categories.splice(o.categories.indexOf(category), 1);
    });
  };

  return o;
}])