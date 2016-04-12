angular.module('todoApp.services',[])
  .factory('Todos', function() {
    var items = [
      {text:'here is my first to do', done:true, details:''},
      {text:'continue writing chapter 1 for this book', done:false, details:''},
      {text:'work on chapter 2 examples', done:false, details:''}
    ]
  return items;
})
