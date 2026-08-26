
//local storage MDN link - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

//FORM SUBMISSION LOGIC
let entryList = JSON.parse(localStorage.getItem('userEntries')) || [];

const entryForm = document.querySelector('.form-container');
entryForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const entrySubject = document.getElementById('entrySubject').value;
    const entryDesc = document.getElementById('entryDesc').value;
    const entryDate = ;

    const myEntry = {
        subject: entrySubject,
        description: entryDesc
    };

    entryList.push(myEntry);

     localStorage.setItem('userEntries', JSON.stringify(entryList))
     let whatIsThis = JSON.parse(localStorage.getItem("userEntries"));

     console.log(whatIsThis);

     const homeEntries = entryList.slice(-5).reverse(); //Had to Google this as (0,5) was always giving me the first 5, not the last 5.

    entryForm.reset();
});



//HOME PAGE ARRAY LOGIC
 

homeEntries.map((x) => {
    //Need to access each value from the object keys.
    const entrySubject =  x.subject;
    const entryDesc = x.description;


});
