// Export your class here as module.exports = MyClass


class Account {
    constructor (name, balance, creditLimit){
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }
    makeDeposit(amount) {
        if (amount > 0)
        this.balance = this.balance + amount;
    }
    makeWithdrawal(amount){
        if (amount < (this.balance + this.creditLimit)){
            this.balance = this.balance - amount;
        }
    }
}


module.exports = Account;