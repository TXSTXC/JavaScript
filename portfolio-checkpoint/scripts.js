//local storage MDN link - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

//FORM SUBMISSION LOGIC
let entryList = JSON.parse(localStorage.getItem('userEntries')) || [];
let homeEntries = JSON.parse(localStorage.getItem('homeEntryList')) || [];

const entryForm = document.querySelector('.form-container');
entryForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const entrySubject = document.getElementById('entrySubject').value;
    const entryDesc = document.getElementById('entryDesc').value;
    const dateTime = new Date();

    //Captures time for me
    const formattedDate = dateTime.toLocaleDateString('en-UK', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    // Captures time for me
    const formattedTime = dateTime.toLocaleTimeString('en-UK', { 
        hour: 'numeric', 
        minute: '2-digit'
    });

    const myEntry = {
        subject: entrySubject,
        description: entryDesc,
        date: formattedDate,
        time: formattedTime
    };

    entryList.push(myEntry);

     localStorage.setItem('userEntries', JSON.stringify(entryList))
     let userEntries = JSON.parse(localStorage.getItem("userEntries"));
     console.log(userEntries);

     
     homeEntries = entryList.slice(-5).reverse(); //Had to Google this as (0,5) was always giving me the first 5, not the last 5.
     localStorage.setItem('homeEntryList', JSON.stringify(homeEntries))
     //homeEntries = JSON.parse(localStorage.getItem("homeEntryList"));
     console.log(homeEntries);

    entryForm.reset();
});
