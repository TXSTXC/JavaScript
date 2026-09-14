const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
const enteredName = localStorage.getItem('userName');
const enteredPassword = localStorage.getItem('userPassword');

// Declare at top level so everything below can access them
const userAccount = userAccounts.find(
    account => account.name === enteredName && account.password === enteredPassword
);

const userBalance = document.getElementById('user-balance');
const userHistory = document.getElementById('user-history');

if (!userAccount) {
    console.error('No matching account found.');
} else {
    document.getElementById('user-name').textContent = userAccount.name;
    document.getElementById('user-account-number').textContent = userAccount.accountNumber;
    document.getElementById('user-sort-code').textContent = userAccount.sortCode;
    userBalance.textContent = `£${userAccount.balance}`;
};

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
});

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
        //Creates Object for a new Transaction Line and pushed into UserAccount History Array
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
    if (transferAmount > userAccount.balance){
        alert("You do not have enough funds to make this transfer.")
    }
    else if(transferAmount > 0 && transferAmount >=10000){
        alert("Please contact branch1 for larger desposit amounts.")
    }
    else if(transferAmount > 0 && transferAmount < 10000){
        userAccount.balance -= transferAmount;
        userBalance.textContent = `£${userAccount.balance.toFixed(2)}`;
        document.querySelector('.transfer-ui').classList.add('hidden');

        const dateToday = Date.now();
        //Creates Object for a new Transaction Line and pushed into UserAccount History Array
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
        console.log(transaction);
        const transactionLine = document.createElement('li');
        const transactionDate = document.createElement('span');
        transactionDate.classList.add('transactionDate');
        transactionDate.textContent = transaction.date;
        transactionLine.classList.add('transaction-line');
        const sign = transaction.amount >= 0 ? '+' : '-';
        const amount = Math.abs(transaction.amount);
        transactionLine.textContent =
            `${sign} £${amount.toFixed(2)} || ${transaction.detail} - ${transaction.date}`;
        userHistory.appendChild(transactionLine);
    });
}

//Creates a transaction line that goes into the userAccount.history
class CreateTransactionLine {
    constructor (date, amount, detail){
        this.date = new Date(date).toLocaleString("en-GB", { timeZone: "UTC" });
        this.amount = amount;
        this.detail = detail;
    }
}

//Updating the above so it now created multiple <li>, which are apended within the transactionLine