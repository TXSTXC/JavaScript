


//What do I want to happen...
//Click deposit button and the UI appears.
//Type into the number field the amount ot deposit.


//Press Submit and this will then:
// - Add the amount to the balance
// - Update the balance on the page
// - Close the deposit UI
const userAccount = {
    name: "Luke Varga",
    accountNumber: "12345678",
    sortCode: "12-34-56",
    balance: 0,
    history: [],
};

const userName = document.getElementById('user-name');
userName.textContent = userAccount.name; //NULL?

const userAccountNumber = document.getElementById('user-account-number');
userAccountNumber.textContent = userAccount.accountNumber;

const userSortCode = document.getElementById('user-sort-code');
userSortCode.textContent = userAccount.sortCode;

const userBalance = document.getElementById('user-balance');
userBalance.textContent = `£${userAccount.balance}`;

const userHistory = document.getElementById('user-history');
//Need to have a function that clears and refreshes the array here.

//*** DEPOSIT UI ***
//Grabs the elements and unhides
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', () =>{
    document.querySelector('.deposit-ui').classList.toggle('hidden');
});

// Logic to update the total and re-hide the UI
const depositInput = document.getElementById('deposit-input');
const depositDetail = document.getElementById('deposit-description')
const submitDepositBtn = document.getElementById('deposit-submit-btn')
const cancelDepositBtn = document.getElementById('deposit-cancel-btn');

cancelDepositBtn.addEventListener('click', ()=>{
    document.querySelector('.deposit-ui').classList.add('hidden');
    depositInput.value = '';
    depositDetail.value = '';
})

//Event Listener for Depositing Money
submitDepositBtn.addEventListener('click', () => {
    const depositAmount = parseFloat(depositInput.value);
    if(depositAmount > 0 && depositAmount >=10000){
        alert("Please contact branch1 for larger desposit amounts.")
    }
    else if(depositAmount > 0 && depositAmount < 10000){
        userAccount.balance += depositAmount;
        userBalance.textContent = `£${userAccount.balance.toFixed(2)}`;
        document.querySelector('.deposit-ui').classList.add('hidden');

        const dateToday = Date.now();
        //Creates Object for a new Transaction Line and pushed into User History Array
        userAccount.history.push(
            new CreateTransactionLine(
                dateToday,
                +depositAmount,
                depositDetail.value
            )
        )
        displayHistory();
        //CLears the UI for deposits
        depositInput.value = '';
        depositDetail.value = '';
    }
    else{
        alert("Please enter a valid amount.")
    }
});

//*** TRANSFER HISTORY ***
//Grabs the elements and unhides
const transferBtn = document.getElementById('transfer-btn');
transferBtn.addEventListener('click', () =>{
    document.querySelector('.transfer-ui').classList.toggle('hidden');
});

// Logic to update the total and re-hide the UI
const transferInput = document.getElementById('transfer-input');
const transferDetail = document.getElementById('transfer-description')
const submitTransferBtn = document.getElementById('transfer-submit-btn')
const cancelTransferBtn = document.getElementById('transfer-cancel-btn');

cancelTransferBtn.addEventListener('click', () => {
    document.querySelector('.transfer-ui').classList.add('hidden');
    transferInput.value = '';
    transferDetail.value = '';
})

//Event Listener for Depositing Money
submitTransferBtn.addEventListener('click', () => {
    const transferAmount = parseFloat(transferInput.value);
    if(transferAmount > 0 && transferAmount >=10000){
        alert("Please contact branch1 for larger desposit amounts.")
    }
    else if(transferAmount > 0 && transferAmount < 10000){
        userAccount.balance -= transferAmount;
        userBalance.textContent = `£${userAccount.balance.toFixed(2)}`;
        document.querySelector('.transfer-ui').classList.add('hidden');

        const dateToday = Date.now();
        //Creates Object for a new Transaction Line and pushed into User History Array
        userAccount.history.push(
            new CreateTransactionLine(
                dateToday,
                -transferAmount,
                transferDetail.value
            )
        )
        displayHistory();
        //CLears the UI for deposits
        transferInput.value = '';
        transferDetail.value = '';
    }
    else{
        alert("Please enter a valid amount.")
    }
});



function displayHistory() {

    userHistory.innerHTML = '';
    userAccount.history.forEach(transaction => {
        const transactionLine = document.createElement('li');
        transactionLine.classList.add('transaction-line');
        const sign = transaction.amount >= 0 ? '+' : '-';
        const amount = Math.abs(transaction.amount);
        transactionLine.textContent =
            `${sign} £${amount.toFixed(2)} || ${transaction.detail}`;
        userHistory.appendChild(transactionLine);
    });
}

//Creates a transaction line that goes into the userAccount.history
class CreateTransactionLine {
    constructor (date, amount, detail){
        this.date = date;
        this.amount = amount;
        this.detail = detail;
    }
}
