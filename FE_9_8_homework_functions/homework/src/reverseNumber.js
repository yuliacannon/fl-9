function reverseNumber(x){
  let lastDigit, reversedNumber=0, dec=10;

  while(x!==0){
    lastDigit = x%dec;
    reversedNumber = reversedNumber*dec + lastDigit;
    x=parseInt(x/dec);
  }

  return reversedNumber;
}
