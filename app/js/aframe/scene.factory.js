// app.factory("Scene", function(){
//   return {
//     "selected": "scene1"
//   }
// });


app.factory("Scene", function(){
  var scene = "scene1";
  return {
      getScene: function(){
        return scene;
      },
      changeScene: function(newScene){
        scene = newScene;
        console.log('Changing Scene within Factory: ', this.getScene());
        return scene;
      }
  }
})