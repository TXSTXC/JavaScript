




const entryForm = document.querySelector('.form-container');
entryForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const entrySubject = document.getElementById('entrySubject').value;
    const entryDesc = document.getElementById('entryDesc').value;

    const myEntry = {
        subject: entrySubject,
        description: entryDesc
    };

    localStorage.setItem('mySavedEntry', JSON.stringify(myEntry));

    entryForm.reset();
});
