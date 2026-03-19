
class BankAccount{
    constructor(accountNumber,sortCode,passcode,accountForename,currentBalance){
     this.accountNumber = accountNumber; // ACC no.
     this.sortCode = sortCode;
     this.passcode = passcode;
     this.accountForename = accountForename; // Name
     this.currentBalance = currentBalance; //This has given the account a starting balance.
     }
         getBalance(){
            return this.currentBalance;
        }
        deposit(amount){
            this.currentBalance += amount;
        }
        withdraw(amount){
            if(this.currentBalance < amount){
                console.log("Sorry, you do not have enough funds for that.")
            }
            else{
                this.currentBalance -= amount;
                console.log(`You have withdrawn £${amount}, and your current balance is now ${this.currentBalance}`);
            }
        }
};

let lukeAccount = new BankAccount("111111", "12-34-56", "0101", "Luke", 1000);



    /*
a       ccountActions(){
            getBalance(){
                return this.currentBalance;
            }
            deposit(amount){
                this.currentBalance += amount;
            }
            withdraw(amount){
                this.currentBalance -= amount;
        }
            */

/*
function deposit(depositAmount,accountREF){
    depositAmount + accountREF.currentBalance;
};

//This will check the balance and then if enough funds, withdraw that amount.
function withdraw(withdrawAmount,accountREF){
    if(accountREF.currentBalance < withdrawAmount){
        console.log("Sorry, you do not have enough funds for that.")
    }
    else{
       accountREF.currentBalance - withdrawAmount;
       console.log(`You have withdrawn £${withdrawAmount}, and y our current balance is now ${accountREF.currentBalance}`);
    }
    
};

function checkBalance(){
    console.log()
};

*/