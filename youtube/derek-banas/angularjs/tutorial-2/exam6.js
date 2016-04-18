var app6 = angular.module('app6', []);

// If you use a controller twice on one page each controller
// has its own $scope. You can update the $scopes however
// by using the $rootScope.
app6.controller('heroCtrl', function($scope, $rootScope) {

  $scope.hero = [
    {realName: "Bruce Wayne", heroName: "Batman"},
    {realName: "Clark Kent", heroName: "Superman"},
  ];

  // Receives the hero to look up
  $scope.getHeroData = function(){
    heroSearch($scope.heroName);
  };

  // Searches through the hero array for a match
  function heroSearch(name){

    // If a hero is found it is returned
    $scope.heroData = "Not Found";
    for(var i=0; i < $scope.hero.length; i++){
      if ($scope.hero[i].heroName === name){
        $scope.heroData = $scope.hero[i].realName + " is " + $scope.hero[i].heroName;
      }
    }
  }

  // If a broadcast is caught named heroUpdated the new heroUpdated
  // is added to the other controllers $scope
  $scope.$on("heroUpdated", function(event, args){
    console.log("Real : " + args.realName + " Hero : " + args.heroName);
    $scope.hero.push({
      realName: args.realName, heroName: args.heroName
    });
  });

  // When a new hero is added we broadcast the update to the
  // other controllers $scope
  $scope.addHeroData = function(realName, heroName){
    $rootScope.$broadcast("heroUpdated",
    {
      realName: realName, heroName: heroName
    });
    console.log("Real : " + realName + " Hero : " + heroName);

  };

});
