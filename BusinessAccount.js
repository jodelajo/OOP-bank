// Export your class here as module.exports = MyClass
class BusinessAccount {
    constructor(name, balance, creditLimit, sepaPermission) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.sepaPermission = sepaPermission;
        this.dailyLimit = dailyLimit
    }

    makeDeposit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
        }
    }
makeWithdrawal(amount){
    if  (amount < this.balance + this.creditLimit && amount < dailyLimit){
       this.balance = this.balance - amount;
    }
}

    sepaInvoice(amount){
        if ( amount < 0) {
            console.log('sorry hoor');
        }
       if (amount  > 0 && (this.sepaPermission === true)){
            const transAct = (amount*0.01);
            console.log('transaction:', transAct)
            this.balance = this.balance + (amount - transAct);
        }
    }
}

const dailyLimit = 20000;
module.exports = BusinessAccount;
