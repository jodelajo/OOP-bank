const Account = require("./Account")
// Export your class here as module.exports = MyClass
// class BusinessAccount {
//     constructor(name, balance, creditLimit, sepaPermission) {
//
//     }

    class BusinessAccount extends Account {
        constructor (name, balance, creditLimit, sepaPermission){
            super();
            this.name = name;
            this.balance = balance;
            this.creditLimit = creditLimit;
            this.sepaPermission = sepaPermission;
        }
        makeDeposit(amount) {
            if (amount > 0) {
                this.balance = this.balance + amount;
            }
        }
        makeWithdrawal(amount){
            if  (amount < this.balance + this.creditLimit && amount < 20000){
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



module.exports = BusinessAccount;
