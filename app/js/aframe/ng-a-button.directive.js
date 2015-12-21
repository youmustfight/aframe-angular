app.directive('ngAButton', function($rootScope, Scene){
  return {
    restrict: 'A',
    link: function(scope, element, attributes){
      element.bind('click', function(e) {
        Scene.changeScene(attributes.ngAButton);
        $rootScope.$broadcast('new scene');
      });
    }
  }
})