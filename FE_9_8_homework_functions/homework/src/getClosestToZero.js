function getClosestToZero(){
  let closest = arguments[arguments.length-1];
  for(let i = 0; i<arguments.length; i++){
    if(Math.abs(arguments[i]) < Math.abs(closest)){
      closest = arguments[i];
    }
  }
  return closest;
}
