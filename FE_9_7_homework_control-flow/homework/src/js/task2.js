let totalPrize=0;
const MAGIC_NUMBER={
  attempts: 3,
  lastNumber: 5,
  prize: 10,
  one: 1,
  two: 2,
  three: 3
}

const txt = (maxValue, attemptsLeft, totalPrize, currentPrize) =>
`Enter a number from 0 to ${maxValue}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currentPrize}$`;

let again=false;

if(confirm('Do you want to play a game?')){
  do{

    again=false;
    const NUMBER=getRandomInt(MAGIC_NUMBER.lastNumber);

    for(
      let i=0, currentPrize=MAGIC_NUMBER.prize; i<MAGIC_NUMBER.attempts;
      i++, currentPrize =Math.floor(currentPrize/2)
    ){
      const input= +prompt(
        txt(
              MAGIC_NUMBER.lastNumber,
              MAGIC_NUMBER.attempts - i,
              totalPrize,
              currentPrize
      )
    );


    if(input===NUMBER){
      totalPrize+=currentPrize;
      if(confirm('Congratulation! Your prize is:' + totalPrize +'$' +
                    'Do you want to continue?')){
            MAGIC_NUMBER.prize *= MAGIC_NUMBER.three;
            MAGIC_NUMBER.lastNumber *= MAGIC_NUMBER.two;

            again = true;
            break;
          } else if(i===MAGIC_NUMBER.attempts){
            alert('Thank you for a game. Your prize is: ' + totalPrize + '$');
          }
    }
    }
    }while(again);
}
alert('You did not become a millionaire, but can');





function getRandomInt(max) {
  return Math.floor(Math.random() * (max + MAGIC_NUMBER.one));
}
