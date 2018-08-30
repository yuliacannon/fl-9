function userCard(key){
  let balance = 100,
  transactionLimit = 100,
  historyLogs = [];


  return{
    getCardOptions(){
      return {balance, transactionLimit, historyLogs, key};
    },

    putCredits(money){
      balance+=money;
      historyLogs.push(
        {
          operationType: 'Received credits',
          credits: money,
          operationTime: new Date().toLocaleString('en-GB')
        }
      );
    },

    takeCredits(money){
      if(transactionLimit >= money && balance >= money ){
        balance-=money;
      }else{
        console.log('Balance or transaction limit is too small');
      }

      historyLogs.push(
        {
          operationType: 'Withdrawal of credits',
          credits: money,
          operationTime: new Date().toLocaleString('en-GB')
        }
      );
    },

    setTransactionLimit(limit){
      transactionLimit=limit;

      historyLogs.push(
        {
          operationType: 'Transaction limit change',
          credits: limit,
          operationTime: new Date().toLocaleString('en-GB')
        }
      );

    },

    transferCredits(credits, recipientCard){
      const tax=0.005;
      if(transactionLimit >= credits && balance >=credits){
        this.takeCredits(credits*tax+credits);
        recipientCard.putCredits(credits);
      }else{
        console.log('Balance or transaction limit is too small');
      }
    }
  };
}


class UserAccount{
  constructor(name){
    this.name = name;
    this.cards = [];
    this.size = 3;
  }

  addCard(){
    if(this.cards.length < this.size){
      this.cards.push(userCard(this.cards.length + 1));
    }else{
      console.log('User can not have more cards');
    }
  }

  getCardByKey(key){
    return this.cards[key - 1];
  }

}
