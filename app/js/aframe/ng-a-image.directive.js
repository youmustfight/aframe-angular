app.directive('ngAImage', function(){
  return {
    restrict: 'E',
    scope: {
      img: '@img'
    },
    replace: true,
    templateUrl: 'app/js/aframe/ng-a-image.html',
    link: function(scope, element, attributes) {
      // console.log(attributes);
      // attributes.src = "public/images/tagline.png"
      // console.log(attributes);
    }
  }
});