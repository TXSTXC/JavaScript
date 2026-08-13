
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', () =>{
    document.querySelector('.deposit-ui').classList.toggle('hidden');
})
const balance = document.getElementById('balance-value');

const depSubBtn = document.getElementById('deposit-submit-btn');
depSubBtn.addEventListener('click', () =>{

});

function depositMoney(amount){
    amount =+ balance;
}