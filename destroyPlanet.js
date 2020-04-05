function destroyPlanet(object1,object2){
  if(isTouching(object1,object2)){
      object2.destroy();
      console.log("destroy");
  }
}