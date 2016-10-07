var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('display', 
    {
      url: '/display/:key',
      views: {
    '': {
      templateUrl: 'display.html',
      controller: 'myController'
    }}
    })
    
  });
myApp.controller('myController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
 $scope.data;
 $http.get('script/data.json').success(function(response){ 
  $scope.data=response;
  var x=$stateParams.key;
   if(x!=undefined){
      $scope.h=response.monuments[x].name;
      $scope.im=response.monuments[x].url;
      $scope.des=response.monuments[x].description;
   } 
  });
}]);