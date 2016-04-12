angular.module('todoApp.services',[])
.config(function ($httpProvider){
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
.factory('Todos', function($http) {
  return {
    getAll: function () {
      return $http.get('http://10.0.2.2:8000/todos'); // if using android
      //return $http.get('http://localhost:8000/todos');
    },
    getTodo: function (id) {
      return $http.get('http://10.0.2.2:8000/todos?id='+id); // if using android
      //return $http.get('http://localhost:8000/todos?id='+id);
    },
    save: function (todoData) {
      return $http.post('http://10.0.2.2:8000/todos', todoData); // if using android
      //return $http.post('http://localhost:8000/todos', todoData);
    },
    edit: function (id, todoData) {
      return $http.post('http://10.0.2.2:8000/todos', todoData); // if using android
      //return $http.post('http://localhost:8000/todos?id='+id, todoData);
    },
    delete: function(id) {
      console.log(" i dont think I have a delete here.")
    }
  }
})
