

//FORM SUBMISSION LOGIC
const entryList = [];

const entryForm = document.querySelector('.form-container');
entryForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const entrySubject = document.getElementById('entrySubject').value;
    const entryDesc = document.getElementById('entryDesc').value;

    const myEntry = {
        subject: entrySubject,
        description: entryDesc
    };

    entryList.push(myEntry);

     localStorage.setItem('entries', JSON.stringify(entryList))

    entryForm.reset();
});


//HOME PAGE ARRAY LOGIC



