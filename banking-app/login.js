const userAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

class BankAccount {
    constructor(name, password, accountNumber, sortCode, balance = 0, history=[]) {
        this.name = name;
        this.password = password;
        this.accountNumber = accountNumber;
        this.sortCode = sortCode;
        this.balance = balance;
        this.history = history;
    }
}


//account number generator function
function generateAccNum() {
    return Math.floor(10000000 + Math.random() * 80000000).toString();
}

//Generates a sort code in the format of 12-34-56
function generateSortCode() {
    const randomNumbers = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        randomNumbers.push(randomNumber.toString().padStart(2, '0'));
    }
    return randomNumbers.join('-');
}

//ACCOUNT CREATION PROCESS
const createAccountBtn = document.getElementById('create-acc-btn');
createAccountBtn.addEventListener('click', () => {
    //adds values into the newBankAccount
    const fullName = document.getElementById('fullName');
    const enteredName = document.getElementById('fullName').value;
    const password = document.getElementById('password');
    const enteredPassword = document.getElementById('password').value;

    if(fullName.value === '' || password.value === ''){
        alert("Please fill in all fields to create an account.");
        return;
    };

    const accountNumber = generateAccNum();
    const sortCode = generateSortCode();

    //CReates the object from above values
    const newAccount = new BankAccount(enteredName, enteredPassword, accountNumber, sortCode);
    //Pushes the new account info into Array and then stores it in local storage.
    userAccounts.push(newAccount);
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts));

    let accName = newAccount.name;
    alert(`Account Created for ${accName}. Please login to continue.`);
    //clears the input boxes.
    fullName.value = '';
    password.value = '';
});

//LOGIN PROCESS
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    const enteredName = document.getElementById('fullName').value;
    const enteredPassword = document.getElementById('password').value;

    if(enteredName === '' || enteredPassword === ''){
        alert("Please fill in all fields to login.");
        return;
    }
    else{
        userAccounts.forEach(account => {
                if(account.name === enteredName && account.password === enteredPassword){
                    localStorage.setItem('userName', enteredName);
                    localStorage.setItem('userPassword', enteredPassword);
                    window.location.href = 'accounts-page.html';
                }
                else{
                        alert("Invalid username or password.");
                        return;
                }
            });
    }
});