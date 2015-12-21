app.controller('NgASceneController', function($scope, Scene){
  $scope.subview = Scene.getScene();
  $scope.$on('new scene', function(){
    $scope.subview = Scene.getScene();
    $scope.$apply();
  })
});