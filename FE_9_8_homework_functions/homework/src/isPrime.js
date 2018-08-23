function isPrime(x){
  let two=2;
  if(x === 1){
    return false;
  }else if(x === two){
    return true;
  }else{
    for(let i = 2;i < x; x++){
      if(x%i === 0){
        return false;
      }else{
        return true;
      }
    }
  }
}
